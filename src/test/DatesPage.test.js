import React from 'react'
import ReactDOM from 'react-dom'
import DatesPage from '../components/DatesPage'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DatesPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})