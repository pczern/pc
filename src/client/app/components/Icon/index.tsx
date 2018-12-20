import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { StatelessComponent } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconDefinition as IconDefinition2 } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
type Props = {
  src: IconDefinition | IconDefinition2
  onClick?: () => void
  className?: string
}

const Icon: StatelessComponent<Props> = props => (
  <FontAwesomeIcon icon={props.src} {...props} />
)
export default Icon
