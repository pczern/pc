import React, { StatelessComponent } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  type: string
  className?: string
  onClick?: (e) => void
}

const Button: StatelessComponent<Props> = props => (
  <button
    type="button"
    className={classNames(
      css.button,
      css[`button__${props.type}`],
      props.className
    )}
    {...props}
  >
    {props.children}
  </button>
)

export const Type = {
  GHOSTLIGHT: 'ghostLight',
  SIMPLELIGHT: 'simpleLight',
  PRIMARY: 'primary',
  CUSTOM: 'custom'
}

export default Button
