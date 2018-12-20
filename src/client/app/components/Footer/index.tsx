import React from 'react'
import { Link } from 'react-router-dom'

import BoxedContainer from '../Container/BoxedContainer'
import css from './index.scss'
import SocialIcons from '../SocialIcons'

const handleChatClick = () => {
  $zopim(() => {
    $zopim.livechat.window.show()
  })
}
const Footer = () => {
  return (
    <footer>
      <BoxedContainer className={css.footer} classNameInner={css.footer__box}>
        <div className={css.footer__inner}>
          <div className={css.footer__columns}>
            <div>
              <h3>Kontaktiere Mich</h3>
              <ul>
                <li>
                  <a href="tel:5551234567">+49 176 84785288</a>
                </li>
                <li>
                  <a href="mailto:philipp.czernitzki@gmail.com?subject=Message">
                    me@philippczernitzki.me
                  </a>
                </li>
                <li>
                  <a onClick={handleChatClick}>Chat with Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Informationen</h3>
              <ul>
                <li>
                  <Link to="/impressum">Impressum</Link>
                </li>
                <li>
                  <Link to="/datenschutz">Datenschutz</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Seiten</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projekte">Projekte</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
                <li>
                  <Link to="/kontakt">Beauftrage Uns</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.box}>
            <SocialIcons />
          </div>
        </div>
        <div className={css.copyright}>&copy; 2018, Philipp Czernitzki</div>
      </BoxedContainer>
    </footer>
  )
}

export default Footer
