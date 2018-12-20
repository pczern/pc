import React, { StatelessComponent, ReactNodeArray, ReactNode } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  children: ReactNode | ReactNodeArray
  paddingVertical?: boolean
  className?: string
}
const FullContainer: StatelessComponent<Props> = props => (
  <div
    className={classNames(
      css.full,
      { [css.paddingVertical]: props.paddingVertical },
      props.className
    )}
  >
    {props.children}
  </div>
)

export default FullContainer
