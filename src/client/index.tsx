import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { hydrate } from 'react-dom'
import {ConnectedRouter} from 'connected-react-router'
import App from './app'
import { hideAllModals } from '../shared/actions/modals'
import { init } from '../shared/actions/init'
import { configureStore } from '../shared/store'

const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const history = isServer
  ? createMemoryHistory({
      initialEntries: ['/']
    })
  : createBrowserHistory()

const initialState = !isServer ? (window as any).__INIT_STATE__ : {}

if (!isServer) {
  delete (window as any).__INIT_STATE__
}

if (process.env.NODE_ENV === 'development')
  if ((module as any).hot) {
     (module as any).hot.accept('./app', () => {
      store.dispatch(init())
    })
  }

const store =
  window['store'] ||
  configureStore({
    initialState,
    history
  })

let prevLocation = {
  pathname: '/',
  hash: null
}
history.listen(location => {
  const pathChanged = prevLocation.pathname !== location.pathname
  const hashChanged = prevLocation.hash !== location.hash
  if (pathChanged || hashChanged) {
    store.dispatch(hideAllModals())
    window.scrollTo(0, 0)
  }
  prevLocation = location
})

const Index = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('root')
hydrate(Index, root)

if (process.env.NODE_ENV === 'development') {
  if (module['hot']) {
    module['hot'].accept(null, () => {
      store.dispatch(init())
    })
  }

  if (!window['store'] || !window['browserHistory']) {
    window['browserHistory'] = history
    window['store'] = store
  }
}
