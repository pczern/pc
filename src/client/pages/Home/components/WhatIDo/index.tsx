import React, { StatelessComponent } from 'react'
import {
  faCode,
  faComments,
  faGlobeAsia
} from '@fortawesome/free-solid-svg-icons'

import Icon from '../../../../app/components/Icon'
import Headline from '../../../../app/components/Headline'
import Subheadline from '../../../../app/components/Subheadline'
import BoxedContainer from '../../../../app/components/Container/BoxedContainer'
import css from './index.scss'

type Props = {}
const WhatIDo: StatelessComponent<Props> = () => {
  return (
    <BoxedContainer
      className={css.container}
      classNameInner={css.container__inner}
    >
      <svg width="0" height="0">
        <linearGradient
          gradientTransform="rotate(90)"
          id="rg"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop stopColor="#119fb5" offset="0%" />
          <stop stopColor="#3e767f" offset="100%" />
        </linearGradient>
      </svg>
      <Headline center={true} className={css.headline}>
        Das mache ich
      </Headline>
      <Subheadline center={true}>Software - Apps - Mentoring</Subheadline>
      <div className={css.columns}>
        <div key={1} className={css.column}>
          <Icon src={faGlobeAsia} />
          <h2>Skalierbare Web Apps</h2>
          <p>
            Hier setze ich auf das UI Framework React.js, welches erfolgreich
            von Instagram, Airbnb und Netflix genutzt wird. Zusätzlich nutze ich
            Module Bundler, Transpiler, Immutability, Typisierung &amp; Linting.
          </p>
        </div>
        <div key={2} className={css.column}>
          <Icon src={faCode} />
          <h2>Android Apps</h2>
          <p>
            Android ist das weltweit am meisten genutzte mobile Betriebssystem.
            Besteche deine Kunden mit einem einzigartigen Kundensupport.
            Verbinde Dich mit Ihnen über Android in Sekunden und beantworte Ihre
            Fragen.
          </p>
        </div>
        <div key={3} className={css.column}>
          <Icon src={faComments} />
          <h2>Tutoring, Mentorship</h2>
          <p>
            Lerne App Entwicklung vom Profi. Ich erkläre Dir anschaulich und
            bewusst wie Du selbst Web Apps in ungekannten Dimensionen baust.
            Hier lernst Du nur Konzepte, die sich später auch durchsetzen
            werden.
          </p>
        </div>
      </div>
    </BoxedContainer>
  )
}

export default WhatIDo
