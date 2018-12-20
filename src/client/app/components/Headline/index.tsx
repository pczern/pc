import React, { StatelessComponent } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  align?: boolean
  className?: string
  center?: boolean
}
const Headline: StatelessComponent<Props> = props => {
  return (
    <h1
      className={classNames(
        css.headline,
        { [css.align]: props.align },
        { [css.center]: props.center },
        props.className
      )}
    >
      {props.children}
    </h1>
  )
}
export default Headline
