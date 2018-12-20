import React, { StatelessComponent } from 'react'
import Modal from '../../components/Modal'
import { connect } from 'react-redux'
import { hideModal } from '../../../../shared/actions/modals'
import css from './index.scss'

type Props = {
  id: string
  ok: () => void
  successful: boolean
}
const VideoModal: StatelessComponent<Props> = props => (
  <Modal closeable={false} id={props.id} className={css.modal}>
    <iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/3ndGumxHXvo?autoplay=1&showinfo=0&controls=0&rel=0"
      frameBorder="0"
    />
  </Modal>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  ok: () => dispatch(hideModal(ownProps.id))
})

export default connect(
  null,
  mapDispatchToProps
)(VideoModal)
