import React from 'react'
import PageRouter from '../router'
import { hot } from 'react-hot-loader/root'
import 'loaders.css/loaders.min.css'
import './css/index.scss'

export default hot(() => (
  <React.Fragment>
    <PageRouter />
  </React.Fragment>
))
