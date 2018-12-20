import _ from 'lodash'
import uuid from 'uuid/v4'
import { SHOW_MODAL, HIDE_MODAL, HIDE_ALL_MODALS } from '../../actions/modals'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [
        ...state,
        {
          props: action.modal,
          type: action.modal.type,
          id: uuid(),
          isOpen: true
        }
      ]
    case HIDE_MODAL:
      return _.reject(state, { id: action.id })
    case HIDE_ALL_MODALS:
      return []
    default:
      return state
  }
}
