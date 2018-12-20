import React, { StatelessComponent } from 'react'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  className?: string
}
const TagList: StatelessComponent<Props> = props => (
  <div className={classNames(css.taglist, props.className)}>
    {props.children}
  </div>
)
export default TagList
