import React from 'react'
import Helmet from 'react-helmet'
import Headline from '../../app/components/Headline'
import Subheadline from '../../app/components/Subheadline'
import projects from '../../app/data/projects.json'
import { connect } from 'react-redux'
import BoxedContainer from '../../app/components/Container/BoxedContainer'
import Project from './components/Project'

import Page from '../../app/components/Page'
import css from './index.scss'

type Props = {
  dispatch: Function
}
class Projekte extends React.Component<Props> {
  render() {
    return (
      <Page>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projekte | philippczernitzki.me</title>
          <meta
            name="description"
            content="Siehe Projekte an denen ich die letzten 6 Jahre gearbeitet habe"
          />
        </Helmet>
        <BoxedContainer>
          <Headline center={true}>Projekte</Headline>
          <Subheadline center={true}>Woran ich gearbeitet habe</Subheadline>
          <div className={css.projects}>
            {projects.map(project => (
              <div key={project.id} className={css.column}>
                <Project project={project} />
              </div>
            ))}
          </div>
        </BoxedContainer>
      </Page>
    )
  }
}

export default connect()(Projekte)
