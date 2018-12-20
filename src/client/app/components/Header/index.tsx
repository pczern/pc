import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import classNames from 'classnames'

import Icon from '../Icon'
import Logo from '../Logo'

import css from './index.scss'

type Props = {}
type State = {
  isOpen: boolean
}

class Header extends React.Component<Props, State> {
  state = {
    isOpen: false
  }

  handleChatIconClick = () => {
    $zopim(() => {
      $zopim.livechat.window.show()
    })
  }

  handleMobileIconClick = () => {
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  render() {
    return (
      <header
        className={classNames(css.header, {
          [css['header--mobileOpen']]: this.state.isOpen
        })}
      >
        <div className={css.header__inner}>
          <Icon
            onClick={this.handleMobileIconClick}
            src={this.state.isOpen ? faTimes : faBars}
            className={classNames(css.header__menuIcon, {
              [css['header__menuIcon--open']]: this.state.isOpen
            })}
          />
          <Link className={css.header__logo} to="/">
            <Logo />
          </Link>
          <Icon
            onClick={this.handleChatIconClick}
            src={faComment}
            className={css.header__messageIcon}
          />
          <ul className={css.header__links}>
            <NavLink
              activeClassName={css['header__link--active']}
              exact={true}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName={css['header__link--active']}
              to="/projekte"
            >
              Projekte
            </NavLink>
            <NavLink activeClassName={css['header__link--active']} to="/blog">
              Blog
            </NavLink>
            <NavLink
              activeClassName={css['header__link--active']}
              to="/kontakt"
            >
              Kontakt
            </NavLink>
            <NavLink
              activeClassName={css['header__link--active']}
              className={css.header__linkHighlighted}
              to="/kontakt"
            >
              Beauftrage Mich
            </NavLink>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
