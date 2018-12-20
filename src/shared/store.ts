import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import RootSaga from '../shared/actions/sagas'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = ({ initialState, history }) => {
  const devtools =
    typeof window !== 'undefined' &&
    typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] === 'function' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ actionsBlacklist: [] })

  const composeEnhancers = devtools || compose

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )

  sagaMiddleware.run(RootSaga)

  if (process.env.NODE_ENV !== 'production') {
    if (module['hot']) {
      module['hot'].accept('./reducers/index.ts', () =>
        store.replaceReducer(connectRouter(history)(require('./reducers/index.ts').default))
      )
    }
  }
  return store
}

export default configureStore
