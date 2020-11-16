import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../css/app.css';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import DatesPage from './DatesPage'
import AddDate from './AddDate'
import sampleDates from './SampleDates'

export const DateContext = React.createContext()

export default function App() {
  const [dates, setDates] = useState(sampleDates)

  function handleDateAdd() {
    const newDate = {
      id: uuidv4(),
      dateDescription:''
    }

    setDates([...dates, newDate])
  }

const dateContextValue = {
  handleDateAdd,
}
  return (
    <DateContext.Provider value= {dateContextValue}>
      <div className='app__container'>
        <nav>
          <NavBar />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/dates' component={DatesPage} />
            <Route path='/add-date' component={AddDate} />
          </Switch>
        </main>
    </div>      
    </DateContext.Provider>  
  )
}