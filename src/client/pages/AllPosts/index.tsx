import React from 'react'
import Helmet from 'react-helmet'
import Page from '../../app/components/Page'
import Header from './components/Header'
class Home extends React.Component {
  render() {
    return (
      <Page>
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
        <Header />
      </Page>
    )
  }
}

export default Home
