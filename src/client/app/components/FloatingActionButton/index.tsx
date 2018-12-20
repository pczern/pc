import React, { StatelessComponent } from 'react'
import Icon from '../Icon'
import css from './index.scss'

type Props = {
  icon: any
}
const FloatingActionButton: StatelessComponent<Props> = props => {
  return (
    <button className={css.button}>
      <Icon src={props.icon} />
    </button>
  )
}

export default FloatingActionButton
