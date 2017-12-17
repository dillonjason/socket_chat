import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app'

ReactDom.hydrate(
  <App />,
  document.getElementById('app')
)
