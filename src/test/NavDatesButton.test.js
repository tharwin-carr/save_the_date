import React from 'react'
import ReactDOM from 'react-dom'
import NavDatesButton from '../buttons/NavDatesButton'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavDatesButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})