import React from 'react'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import Banner from './components/Banner'
import { showModal } from '../../../shared/actions/modals'
import { ModalType } from '../../app/modals'

import AboutMe from './components/AboutMe'
import WhatIDo from './components/WhatIDo'
import Reviews from './components/Reviews'
import HireMe from './components/HireMe'
import Page from '../../app/components/Page'
import Map from './components/Map'
type Props = {
  dispatch: Function
}
class Home extends React.Component<Props> {
  openErrorModal = () => {
    this.props.dispatch(
      showModal({
        type: ModalType.ERROR
      })
    )
  }

  render() {
    return (
      <Page className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Philipp Czernitzki - Software Engineer &amp; Consultant</title>
          <meta
            name="description"
            content=" Hey, ich bin Philipp Czernitzki, Fullstack Developer &amp; Consultant.
        Ich entwerfe, plane, entwickle und teste Apps mit Stil. Dabei setzte ich
        auf zukunftssichere Technologien wie React.js &amp; Android. Durch ein
        unschlagbares Team an meiner Seite, ist es mir möglich, immer die
        aktuellesten Technologien einzusetzen sowie das unmögliche Möglich zu
        machen."
          />
        </Helmet>
        <Banner />
        <div className="home-inner">
          {/* <AboutMe /> */}
          <WhatIDo />
          <Reviews />
          <AboutMe />
          <HireMe />
          <Map />
        </div>
        {/* <FloatingActionButton icon={faComment} /> */}
      </Page>
    )
  }
}

export default connect()(Home)
