import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { connect } from 'react-redux'
import { ShortPost } from '../../app/components/Post'
import BoxedContainer from '../../app/components/Container/BoxedContainer'
import Page from '../../app/components/Page'
import Utils from '../../app/helpers/Utils'

import { RichText } from 'prismic-reactjs'
import PrismicFetcher from '../../app/data/PrismicFetcher'
import { Link } from 'react-router-dom'

type Props = {
  dispatch: Function
}
type State = {
  articles: any
}
class Blog extends React.Component<Props, State> {
  state = {
    doc: null,
    articles: null
  }

  componentDidMount() {
    PrismicFetcher.getDocumentsByType(PrismicFetcher.TYPE_POST, {
      orderings: '[my.blog_post.date desc]'
    }).then(response => {
      this.setState({ articles: response })
    })
  }

  renderShortArticle = article => {
    const { title, description, image, date } = article.data
    const { id, uid } = article
    return (
      <ShortPost key={id}>
        <Link to={`/blog/${uid}`}>
          <h1>{RichText.asText(title)}</h1>
          <div className="infos">
            <time>{Utils.getBlogDate(date)}</time>
          </div>

          {!_.isEmpty(image) && (
            <img
              src={image.url}
              alt={image.alt}
              width={image.dimensions.height}
              height={image.dimensions.width}
            />
          )}
          <p>
            {RichText.render(description, PrismicFetcher.linkResolver)}
            <br />
          </p>
          <Link to={`/blog/${uid}`}>Weiterlesen</Link>
        </Link>
      </ShortPost>
    )
  }

  render() {
    return (
      <Page isLoading={!this.state.articles}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | philippczernitzki.me</title>
          <meta
            name="description"
            content="Hey, ich bin Philipp Czernitzki, Fullstack Developer &amp; Consultant.
        Ich entwerfe, plane, entwickle und teste Apps mit Stil. Dabei setzte ich
        auf zukunftssicherer Technologien wie React.js &amp; Android. Durch ein
        unschlagbares Team an meiner Seite, ist es mir möglich immer die
        aktuellesten Technologien einzusetzen sowie das unmögliche Möglich zu
        machen."
          />
        </Helmet>
        <BoxedContainer>
          {this.state.articles
            ? this.state.articles.map(article =>
                this.renderShortArticle(article)
              )
            : null}
        </BoxedContainer>
      </Page>
    )
  }
}

export default connect()(Blog)
