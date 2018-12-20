import React, { StatelessComponent } from 'react'
import css from './index.scss'

type Props = {
  children: string
}
const Tag: StatelessComponent<Props> = props => {
  return <div className={css.tag}>{props.children}</div>
}

export default Tag
