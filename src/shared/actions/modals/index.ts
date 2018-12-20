export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const HIDE_ALL_MODALS = 'HIDE_ALL_MODALS'

export const showModal = modal => ({
  modal,
  type: SHOW_MODAL
})

export const hideModal = id => ({
  id,
  type: HIDE_MODAL
})

export const hideAllModals = () => ({
  type: HIDE_ALL_MODALS
})
