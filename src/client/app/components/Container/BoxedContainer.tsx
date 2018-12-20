import React, { StatelessComponent, ReactNodeArray, ReactNode } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  children: ReactNode | ReactNodeArray
  classNameInner?: string
  className?: string
  maxWidth?: boolean
}
const BoxedContainer: StatelessComponent<Props> = props => (
  <div className={classNames(css.boxed, props.className)}>
    <div className={classNames(css.boxed__inner, props.classNameInner)}>
      {props.maxWidth ? (
        <div className={css['boxed--maxWidth']}>{props.children}</div>
      ) : (
        props.children
      )}
    </div>
  </div>
)

export default BoxedContainer
