import React, { StatelessComponent } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  className?: string
  center?: boolean
}
const Headline: StatelessComponent<Props> = props => {
  return (
    <h2
      className={classNames(
        css.headline,
        { [css.center]: props.center },
        props.className
      )}
    >
      {props.children}
    </h2>
  )
}
export default Headline
