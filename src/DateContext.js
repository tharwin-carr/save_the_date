import React from 'react'

const DateContext = React.createContext({
    dates: [],
    favorites: [],
    addDate: () => {},
    deleteFavorite: () => {},
    updateDate: () => {},
    favoriteDate: () => {}
})

export default DateContext