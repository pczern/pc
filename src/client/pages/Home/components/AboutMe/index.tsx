import React from 'react'
import Headline from '../../../../app/components/Headline'
import Subheadline from '../../../../app/components/Subheadline'

import BoxedContainer from '../../../../app/components/Container/BoxedContainer'
import css from './index.scss'

const AboutMe = () => {
  return (
    <BoxedContainer
      className={css.container}
      classNameInner={css.container__inner}
    >
      <Headline center={true}>Wer ich bin</Headline>
      <Subheadline center={true}>Erfahre Mehr</Subheadline>
      <p className={css.text}>
        Hey, ich bin Philipp Czernitzki, Fullstack Developer &amp; Consultant.
        Ich entwerfe, plane, entwickle und teste Apps mit Stil. Dabei setzte ich
        auf zukunftssicherer Technologien wie React.js &amp; Android. Durch
        jahrelange Berufserfahrung ist es mir möglich immer die aktuellesten
        Technologien einzusetzen, sowie das unmögliche Möglich zu machen.
      </p>
      <div className={css.data}>
        <div key={1}>
          <span>+3000</span>
          <span>Klicks</span>
        </div>
        <div key={2}>
          <span>22</span>
          <span>Projekte</span>
        </div>
        <div key={3}>
          <span>9</span>
          <span>Kunden</span>
        </div>
      </div>
    </BoxedContainer>
  )
}

export default AboutMe
