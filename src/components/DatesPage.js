import React from 'react'
import { Link } from 'react-router-dom'
import Date from './Date'

export default function DatesPage() {
    return (
        <div className='dates-page__container'>
            <h2 className='dates-page__header'>
                You're random date idea is:
            </h2>
            <Date />
            <div className='add-date-btn__container'>
                <button className='btn generate-btn'>
                    Generate New Date
                </button>
                <Link to='/add-date'>
                    <button className='btn add-date-btn'>
                        Add New Date Idea                    
                    </button>
                </Link>
            </div>

        </div>

    )
}
