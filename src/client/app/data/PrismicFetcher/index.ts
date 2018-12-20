import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://pczern.cdn.prismic.io/api/v2'

export default class PrismicFetcher {
  static TYPE_POST = 'blog_post'

  static getDocumentsByType = (type, options) => {
    return PrismicFetcher.getResponseByType(type, options).then(
      res => res.results
    )
  }

  static getDocumentByID = (id, options) => {
    return Prismic.api(apiEndpoint, options).then(api => api.getByID(id))
  }

  static getDocumentByTypeAndUID = (type, uid, options = null) => {
    return Prismic.api(apiEndpoint, options).then(api =>
      api.getByUID(type, uid)
    )
  }

  static getResponseByType = (type, options) => {
    return Prismic.api(apiEndpoint, null).then(api =>
      api.query(Prismic.Predicates.at('document.type', type), options)
    )
  }

  static getResponseByID = (id, options) => {
    return Prismic.api(apiEndpoint, null).then(api =>
      api.query(Prismic.Predicates.at('document.id', id), options)
    )
  }

  static linkResolver = doc => {
    // Define the url depending on the document type
    if (doc.type === 'blog_post') {
      return `/blog/${doc.uid}`
    }

    // Default to homepage
    return '/'
  }
}
