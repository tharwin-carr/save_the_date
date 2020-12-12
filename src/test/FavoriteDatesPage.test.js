import React from 'react'
import ReactDOM from 'react-dom'
import FavoriteDatesPage from '../components/FavoriteDatesPage'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteDatesPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})