import React, { StatelessComponent } from 'react'
import {
  faLinkedin,
  faXingSquare,
  faFacebook,
  faYoutube,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import Icon from '../Icon'
import css from './index.scss'
type Props = {
  className?: string
}
const SocialIcons: StatelessComponent<Props> = props => {
  return (
    <div className={classNames(css.icons, props.className)}>
      <a href="https://www.linkedin.com/in/pczernitzki">
        <Icon src={faLinkedin} />
      </a>
      <a href="https://www.xing.com/profile/Philipp_Czernitzki">
        <Icon src={faXingSquare} />
      </a>
      <a href="https://www.facebook.com/pczernitzki">
        <Icon src={faFacebook} />
      </a>
      <a href="https://www.youtube.com/channel/UCd-q4-zID8jTaAF8pbly3Sw">
        <Icon src={faYoutube} />
      </a>
      <a href="https://www.instagram.com/pczernitzki/">
        <Icon src={faInstagram} />
      </a>
      <a href="https://github.com/pczern">
        <Icon src={faGithub} />
      </a>
    </div>
  )
}

export default SocialIcons
