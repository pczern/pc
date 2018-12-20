import React from 'react'
import Header from '../../app/components/Header'
import Map from '../../app/components/Map'

import Footer from '../../app/components/Footer'
import Headline from '../../app/components/Headline'
import Subheadline from '../../app/components/Subheadline'

import { connect } from 'react-redux'
import BoxedContainer from '../../app/components/Container/BoxedContainer'
import pageCss from '../index.scss'
import css from './index.scss'
import Icon from '../../app/components/Icon'
import { faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons'

import {
  faReact,
  faAndroid,
  faPython,
  faAws,
  faBitbucket,
  faCss3,
  faHtml5,
  faGithub,
  faDigitalOcean,
  faElementor,
  faDropbox,
  faFontAwesome,
  faGit,
  faJsSquare,
  faLinux,
  faNode,
  faNpm,
  faPhp,
  faSass,
  faStripe,
  faWordpress,
  faJava
} from '@fortawesome/free-brands-svg-icons'

type Props = {
  dispatch: Function
}
class Technologien extends React.Component<Props> {
  render() {
    return (
      <div className={pageCss.page}>
        <Header />
        <BoxedContainer>
          <Headline>Technologien</Headline>
          <Subheadline>Welche Wir Verwenden</Subheadline>
          <p>
            Um die qualitativsten Apps am Markt zu entwicklen, benötigt man die
            richtigen Tools.
            <br />
            Deshalb setze ich auf eine Vielzahl verschiedener zukunftssicheren
            Tools
          </p>
          <div className={css.icons}>
            <Icon src={faReact} />
            <Icon src={faAndroid} />
            <Icon src={faPython} />
            <Icon src={faAws} />
            <Icon src={faBitbucket} />
            <Icon src={faCss3} />
            <Icon src={faHtml5} />
            <Icon src={faGit} />
            <Icon src={faGithub} />
            <Icon src={faDigitalOcean} />
            <Icon src={faElementor} />
            <Icon src={faDropbox} />
            <Icon src={faFontAwesome} />
            <Icon src={faJsSquare} />
            <Icon src={faLinux} />
            <Icon src={faNode} />
            <Icon src={faNpm} />
            <Icon src={faPhp} />
            <Icon src={faSass} />
            <Icon src={faStripe} />
            <Icon src={faWordpress} />
            <Icon src={faDatabase} />
            <Icon src={faJava} />
            <Icon src={faCloud} />
          </div>
        </BoxedContainer>
        <Map />
        <Footer />
      </div>
    )
  }
}

export default connect()(Technologien)
