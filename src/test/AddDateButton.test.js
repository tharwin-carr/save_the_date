import React from 'react'
import ReactDOM from 'react-dom'
import AddDateButton from '../buttons/AddDateButton'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddDateButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})