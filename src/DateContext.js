import React from 'react'

const DateContext = React.createContext({
    dates: [],
    savedDates: [],
    addDate: () => {},
    deleteFavorite: () => {},
    updateDate: () => {},
    favoriteDate: () => {}
})

export default DateContext