import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import Modals from '../app/modals'
import Blog from '../pages/Blog'
import BlogPage from '../pages/BlogPage'

import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Impressum from '../pages/Impressum'
import Datenschutz from '../pages/Datenschutz'
import FourOFour from '../pages/404'
import Zopim from '../app/components/Zopim'

class PageRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/blog" exact={true} component={Blog} />
          <Route path="/blog/:postid" component={BlogPage} />
          <Route path="/projekte" component={Projects} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
          <Route path="/bio" component={About} />
          <Route path="/" component={About} exact={true} />
          <Route component={FourOFour} />
        </Switch>
        <Modals />
        <Zopim />
      </React.Fragment>
    )
  }
}
export default PageRouter
