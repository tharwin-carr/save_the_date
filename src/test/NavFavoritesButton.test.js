import React from 'react'
import ReactDOM from 'react-dom'
import NavFavoritesButton from '../buttons/NavFavoritesButton'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NavFavoritesButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})