import React from 'react'
import ReactDOM from 'react-dom'
import FavoritesDatesPage from '../components/FavoriteDatesPage'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoritesDatesPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})