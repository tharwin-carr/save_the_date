import React from 'react'
import ReactDOM from 'react-dom'
import AddDate from '../components/AddDate'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddDate />, div)
  ReactDOM.unmountComponentAtNode(div)
})