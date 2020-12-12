import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)


ReactDOM.render(
  <BrowserRouter>
      <App />  
  </BrowserRouter>,
  document.getElementById('root')
);
