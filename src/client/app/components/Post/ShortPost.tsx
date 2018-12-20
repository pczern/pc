import React from 'react'
import css from './index.scss'

const shortPostClass = css['post__short']

type Props = {
  children: any
}
function ShortPost(props: Props) {
  return (
    <article className={shortPostClass} {...props}>
      {props.children}
    </article>
  )
}

export default ShortPost
