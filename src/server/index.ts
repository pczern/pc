import express from 'express'
import cors from 'cors'
import path from 'path'
import chalk from 'chalk'
import manifestHelpers from 'express-manifest-helpers'
import { createMemoryHistory } from 'history'
import morgan from 'morgan'
import sgMail from '@sendgrid/mail'
import Prismic from 'prismic-javascript'
import bodyParser from 'body-parser'
import { configureStore } from '../shared/store'
import serverRender from './render'
import paths from '../../config/paths'

require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const apiEndpoint = 'https://pczern.cdn.prismic.io/api/v2'

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(
  paths.publicPath,
  express.static(path.join(paths.clientBuild, paths.publicPath))
)
// app.use('/favicon.ico', (req, res) => {
//     res.send('');
// });
// }

app.use(cors())

app.use(bodyParser.json())

app.use((req, res, next) => {
  req['store'] = configureStore({
    initialState: {},
    history: createMemoryHistory({
      initialEntries: [req.url]
    })
  })
  return next()
})

const manifestPath = path.join(paths.clientBuild, paths.publicPath)

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`
  })
)

app.post('/api/mail', (req, res) => {
  const { from, subject, message } = req.body
  console.log('received')
  if (from && subject && message) {
    const msg = {
      subject,
      from: 'server@philippczernitzki.me',
      html: `${message}<br>Send by: ${from}`,
      to: 'philipp.czernitzki@gmail.com'
    }

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).send('Successful sent')
      })
      .catch(() => {
        res.sendStatus(500)
      })
  } else {
    res.status(500).send('some fields were not filled')
  }
})

// recursively fetch all pages
function getPage(api, page, documents) {
  return api
    .query(Prismic.Predicates.any('document.type', ['blog_post']), {
      page,
      pageSize: 100,
      fetch: []
    })
    .then(response => {
      if (response.next_page !== null) {
        return getPage(api, page + 1, documents.concat(response.results))
      }
      return documents.concat(response.results)
    })
}

const linkResolver = doc => {
  // Define the url depending on the document type
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`
  }

  // Default to homepage
  return '/'
}

// routes don't contain, the non follows e.g.:
// '/impressum',
// '/datenschutz',
// remember that!
const routes = ['/blog', '/projekte', '/kontakt', '/']

app.route('/sitemap.txt').get((req, res) => {
  let body = ''
  routes.forEach(route => {
    body += `${req.protocol}://${req.headers.host}${route}\r\n`
  })
  Prismic.getApi(apiEndpoint, { req })
    .then(api => {
      return getPage(api, 1, [])
    })
    .then(documents => {
      documents.forEach(doc => {
        body += `${req.protocol}://${req.headers.host}${linkResolver(doc)}\r\n`
      })
      res.send(body)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
app.use(serverRender())
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  return res.status(404).json({
    status: 'error',
    message: err.message,
    stack:
      // print a nicer stack trace by splitting line breaks and making them array items
      process.env.NODE_ENV === 'development' &&
      (err.stack || '')
        .split('\n')
        .map(line => line.trim())
        .map(line => line.split(path.sep).join('/'))
        .map(line =>
          line.replace(
            process
              .cwd()
              .split(path.sep)
              .join('/'),
            '.'
          )
        )
  })
})

app.listen(process.env.PORT || 8500, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(
      `App is running: 🌎 http://localhost:${process.env.PORT || 8500}`
    )
  )
})

export default app
