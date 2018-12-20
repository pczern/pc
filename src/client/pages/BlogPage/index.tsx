import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { connect } from 'react-redux'
import BoxedContainer from '../../app/components/Container/BoxedContainer'
import Page from '../../app/components/Page'
import Utils from '../../app/helpers/Utils'
import { RichText } from 'prismic-reactjs'
import PrismicFetcher from '../../app/data/PrismicFetcher'
import RouteHelper from '../../app/helpers/RouteHelper'
import Post from '../../app/components/Post'
type Props = {
  dispatch: Function
  match: any
}
type State = {
  article: any
}
class Blog extends React.Component<Props, State> {
  state = {
    article: null
  }

  componentDidMount() {
    const param = 'postid'
    const exists = RouteHelper.doesParamExist(this.props.match, param)
    if (exists) {
      PrismicFetcher.getDocumentByTypeAndUID(
        PrismicFetcher.TYPE_POST,
        this.props.match.params[param]
      ).then(article => {
        this.setState({ article })
      })
    }
  }

  renderArticle = article => {
    const { title, content, image, date } = article.data
    const { id } = article
    return (
      <Post key={id}>
        <div className="head">
          <h1>{RichText.asText(title)}</h1>
          <div className="infos">
            <time>{Utils.getBlogDate(date)}</time>
          </div>
        </div>
        {!_.isEmpty(image) && (
          <img
            src={image.url}
            alt={image.alt}
            width={image.dimensions.height}
            height={image.dimensions.width}
          />
        )}

        <div>{RichText.render(content, PrismicFetcher.linkResolver)}</div>
        <footer>ein Artikel von Philipp Czernitzki</footer>
      </Post>
    )
  }

  render() {
    const title =
      this.state.article &&
      this.state.article.data &&
      this.state.article.data.title
        ? RichText.asText(this.state.article.data.title)
        : 'Blog | philippczernitzki.me'

    return (
      <Page>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
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
          {this.state.article ? this.renderArticle(this.state.article) : null}
        </BoxedContainer>
      </Page>
    )
  }
}

export default connect()(Blog)
