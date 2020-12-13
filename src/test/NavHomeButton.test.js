import React from 'react'
import ReactDOM from 'react-dom'
import NavHomeButton from '../buttons/NavHomeButton'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavHomeButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})