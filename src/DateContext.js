import React from 'react'

const DateContext = React.createContext({
    dates: [],
    addDate: () => {},
    deleteDate: () => {},
    updateDate: () => {}
})

export default DateContext