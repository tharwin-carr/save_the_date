import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sampleDates from './SampleDates'




export default function DatesPage() {
    const [dates, setDates] = useState(sampleDates.sampleDates)

    const getRandomDate = () => {
        let randomDate = Math.floor(Math.random() * dates.length)
        setDates(dates[randomDate])
    }

    useEffect(() => {
        getRandomDate()
    }, [])

    return (

        <div className='dates-page__container'>
            <h2 className='dates-page__header'>
                You're random date idea is:
            </h2>
            <p>
                {dates.dateDescription}                               
            </p>
            <div className='add-date-btn__container'>
                <button
                    onClick={getRandomDate} 
                    className='btn generate-btn'
                >
                    Generate New Date
                </button>
                <Link to='/add-date'>
                    <button className='btn add-date-btn'>
                        Submit A New Date Idea                    
                    </button>
                </Link>
            </div>
        </div>
    )
}