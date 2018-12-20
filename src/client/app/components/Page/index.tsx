import React, { StatelessComponent } from 'react'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import css from './index.scss'

type Props = {
  children?: any
  className?: string
  noMarginTop?: boolean
  isLoading?: boolean
  maxWidth?: boolean
  noCenter?: boolean
}
const Page: StatelessComponent<Props> = props => (
  <div
    className={classNames(
      css.page,
      { [css.page__noCenter]: props.noCenter },
      { [css.page__noMarginTop]: props.noMarginTop },
      props.className
    )}
  >
    <Header />
    <div className={css.content}>
      <div className={css.contentInner}>
        {props.children}

        {props.isLoading && (
          <div className={css.loader}>
            <div className="loader-inner line-scale">
              <div className={css.loadDiv} />
              <div className={css.loadDiv} />
              <div className={css.loadDiv} />
              <div className={css.loadDiv} />
              <div className={css.loadDiv} />
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
  </div>
)
export default Page
