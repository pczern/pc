import React, { StatelessComponent } from 'react'
import Button, { Type } from '../../../../app/components/Button'
import Headline from '../../../../app/components/Headline'
import BoxedContainer from '../../../../app/components/Container/BoxedContainer'
import { Link } from 'react-router-dom'
import css from './index.scss'

type Props = {}
const HireMe: StatelessComponent<Props> = () => (
  <BoxedContainer className={css.container}>
    <Headline className={css.headline}>Bereit für etwas neues</Headline>
    <Link to="/kontakt">
      <Button type={Type.PRIMARY}>KONTAKTIERE MICH</Button>
    </Link>
  </BoxedContainer>
)
export default HireMe
