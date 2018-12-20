import React, { StatelessComponent } from 'react'
import { connect } from 'react-redux'
import PlayCircle from '../../../../app/assets/playCircle1.svg'
import Button, { Type } from '../../../../app/components/Button'
import FullContainer from '../../../../app/components/Container/FullContainer'
import BoxedContainer from '../../../../app/components/Container/BoxedContainer'

import SocialIcons from '../../../../app/components/SocialIcons'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import css from './index.scss'
import IconLine from './IconLine'
import { showModal } from '../../../../../shared/actions/modals'
import { ModalType } from '../../../../app/modals'

type Props = {
  dispatch: (e) => void
}
const Banner: StatelessComponent<Props> = props => (
  <div className={css.container}>
    <FullContainer className={css.banner}>
      <img
        className={classNames(
          'animated',
          'rotateIn',
          'delay-5s',
          css.banner__play
        )}
        src={PlayCircle}
        onClick={() =>
          props.dispatch(
            showModal({
              type: ModalType.VIDEO
            })
          )
        }
      />
      <SocialIcons className={css.banner__socialIcons} />
    </FullContainer>

    <BoxedContainer classNameInner={css.content}>
      <h1 className={css.headline}>
        <span>Fullstack</span>
        <span>Freelance</span>
        <span>Entwickler</span>
      </h1>
      <IconLine />
      <div className={css.buttons}>
        <Link to="/kontakt">
          <Button className={css.primaryButton} type={Type.CUSTOM}>
            Kontaktiere Mich
          </Button>
        </Link>

        <a href="mailto: philipp.czernitzki@gmail.com?subject=Message">
          <Button className={css.secondaryButton} type={Type.CUSTOM}>
            me@philippczernitzki.me
          </Button>
        </a>
      </div>
    </BoxedContainer>
  </div>
)
export default connect()(Banner)
