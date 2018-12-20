import React, { StatelessComponent } from 'react'
import Helmet from 'react-helmet'
import Page from '../../app/components/Page'
import Headline from '../../app/components/Headline'
import Subheadline from '../../app/components/Subheadline'

import BoxedContainer from '../../app/components/Container/BoxedContainer'

type Props = {
  staticContext: any
}

const FourOFour: StatelessComponent<Props> = ({ staticContext = {} }) => {
  staticContext.status = 404
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Impressum | philippczernitzki.me</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <BoxedContainer>
        <Headline>404 - Fehler</Headline>
        <Subheadline>Die Seite ist nicht verfügbar</Subheadline>
      </BoxedContainer>
    </Page>
  )
}
export default FourOFour
