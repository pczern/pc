import React, { StatelessComponent } from 'react'
import _ from 'lodash'
import Icon from '../../../../app/components/Icon'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import css from './index.scss'
type Props = {
  description: string
  stars: number
  author: string
  authorRole: string
}
const Review: StatelessComponent<Props> = props => (
  <div className={css.review}>
    <p className={css.review__text}>{props.description}</p>
    <div className={css.review__infos}>
      <div className={css.review__stars}>
        {_.times(props.stars, i => (
          <Icon key={i} src={faStar} />
        ))}
      </div>
      <div>
        <span>{props.author}</span>
        <span>{props.authorRole}</span>
      </div>
    </div>
  </div>
)
export default Review
