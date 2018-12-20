import React, { StatelessComponent } from 'react'
import FullContainer from '../../../../app/components/Container/FullContainer'
import TheMap from '../../../../app/components/Map'
import css from './index.scss'

type Props = {}
const Map: StatelessComponent<Props> = () => (
  <FullContainer className={css.container}>
    <TheMap />
  </FullContainer>
)
export default Map
