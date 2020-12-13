import React from 'react'
import ReactDOM from 'react-dom'
import DatesButton from '../buttons/DatesButton'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DatesButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})