import React from 'react'
import css from './index.scss'

type Props = {
  children: any
}
function Post(props: Props) {
  return <article className={css.post}>{props.children}</article>
}

export default Post
