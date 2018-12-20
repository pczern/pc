import React, { StatelessComponent } from 'react'
import LogoAsset from '../../assets/logo1.svg'

type Props = {
  className?: string
}
const Logo: StatelessComponent<Props> = props => (
  <img className={props.className} alt="Logo P" src={LogoAsset} />
)

export default Logo
