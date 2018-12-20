import React, { StatelessComponent } from 'react'
import Icon from '../../../../../app/components/Icon'
import {
  faAndroid,
  faReact,
  faNode,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'
import css from './index.scss'
import classNames from 'classnames'

type Props = {}

const animate = classNames(css.icon, 'pulse', 'animated', css.delay)
const IconLine: StatelessComponent<Props> = () => {
  // if (props.size.width < 1100) return null

  return (
    <div className={css.icons}>
      <div className={css.column}>
        <Icon className={animate} src={faAndroid} />
        <h3>Android</h3>
      </div>
      <div className={css.column}>
        <Icon className={animate} src={faReact} />
        <h3>React.js</h3>
      </div>
      <div className={css.column}>
        <Icon className={animate} src={faNode} />
        <h3>Node.js</h3>
      </div>
      <div className={css.column}>
        <Icon className={animate} src={faNodeJs} />
        <h3>JavaScript</h3>
      </div>
    </div>
  )
}

export default IconLine
