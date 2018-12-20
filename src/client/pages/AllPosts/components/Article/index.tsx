import React from 'react'
import css from './index.scss'

type Props = {
  title: string
  description?: string
}
class Article extends React.Component<Props> {
  render() {
    const { title, description } = this.props

    return (
      <article className={css.article}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </article>
    )
  }
}
export default Article
