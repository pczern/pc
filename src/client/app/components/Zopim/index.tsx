import React from 'react'

type Props = {}
class Zopim extends React.Component<Props> {
  map
  constructor(props) {
    super(props)
    this.map = React.createRef()
  }

  componentDidMount() {
    // initMap(this.map.current)

    this.init()
  }

  shouldComponentUpdate() {
    return false
  }

  init = () =>
    (window as any).$zopim ||
    (function(d, s) {
      const z: any = ((window as any).$zopim = function(c) {
        z._.push(c)
      })
      const $: any = (z.s = d.createElement(s))
      const e = d.getElementsByTagName(s)[0]
      z.set = function(o) {
        z.set._.push(o)
      }
      z._ = []
      z.set._ = []
      $.async = !0
      $.setAttribute('charset', 'utf-8')
      $.src = 'https://v2.zopim.com/?4OXv88mwX8xPKjwvZSATJCMFGI7x5Hn9'
      z.t = +new Date()
      $.type = 'text/javascript'
      e.parentNode.insertBefore($, e)
    })(document, 'script')

  render() {
    return null
  }
}

export default Zopim
