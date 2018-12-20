import React from 'react'
// redux
import { connect } from 'react-redux'
import { getModals } from '../../../shared/selectors/modals'

// modals
import ProjectModal from './ProjectModal'
import MailModal from './MailModal'
import VideoModal from './VideoModal'
import ErrorModal from './ErrorModal'

// eslint-disable
export const ModalType = {
  PROJECT: 'MODAL_TYPE_PROJECT',
  MAIL: 'MODAL_TYPE_MAIL',
  VIDEO: 'MODAL_TYPE_VIDEO',
  ERROR: 'MODAL_TYPE_ERROR'
}

const MODAL_COMPONENTS: { [a: string]: any } = {
  [ModalType.PROJECT]: ProjectModal,
  [ModalType.MAIL]: MailModal,
  [ModalType.VIDEO]: VideoModal,
  [ModalType.ERROR]: ErrorModal
}

const ModalRoot = ({ modals }) => {
  if (!modals || modals.length < 1) return null

  return modals.map(modal => {
    const { type, props, id } = modal
    const SpecificModal = MODAL_COMPONENTS[type]
    return <SpecificModal {...props} key={id} id={id} />
  })
}

export default connect(state => ({ modals: getModals(state) }))(ModalRoot)
