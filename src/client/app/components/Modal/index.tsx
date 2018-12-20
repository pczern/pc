import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Icon from '../Icon'
import { hideModal } from '../../../../shared/actions/modals'
import css from './index.scss'

type Props = {
  closeable?: boolean
  id?: string | number
  hideModal?: any
  className?: string
}
class Modal extends React.Component<Props> {
  static defaultProps = {
    closeable: true
  }
  stopWheel = e => {
    if (e.preventDefault) {
      e.preventDefault()
      e.nativeEvent.preventDefault()
    } /* Chrome, Safari, Firefox */
    e.returnValue = false /* IE7, IE8 */
  }

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = 'hidden'
  }
  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0]

    body.style.overflowY = 'auto'
  }

  onWheel = e => {
    if (e.preventDefault) e.preventDefault()
    e.nativeEvent.preventDefault()
    e.stopPropagation()

    return false
  }

  render() {
    const props = this.props
    return (
      <div className={css.modal}>
        <div
          className={classNames(css.modal__inner, props.className)}
          onTouchMove={this.onWheel}
        >
          {props.closeable ? (
            <Icon
              onClick={props.hideModal(props.id)}
              className={css.modal__close}
              src={faTimes}
            />
          ) : null}
          {props.children}
        </div>
        <div
          className={css.modal__background}
          onClick={props.hideModal(props.id)}
          onWheel={this.onWheel}
          onTouchMove={this.onWheel}
          onTouchMoveCapture={this.onWheel}
          onKeyDown={this.onWheel}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: id => e => {
      e.preventDefault()
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
      dispatch(hideModal(id))
    }
  }
}
export default connect(
  () => ({}),
  mapDispatchToProps
)(Modal)
