import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sampleDates from './SampleDates'

export default class DatesPage extends Component {
    constructor() {
        super()
        this.state = {
            id: sampleDates.id,
            dateDescription: sampleDates.dateDescription
        }
    }

    //function to generate a random date
    generateRandomDate = () => {
        //get random numbers for new date idea
        let randomNum = Math.floor(Math.random() * sampleDates.length)
        let randomDate = sampleDates[randomNum]

        //update state
        this.setState({
            id: randomDate.id,
            dateDescription: randomDate.dateDescription
        })

        this.shuffleDates(sampleDates)
        console.log(sampleDates)
    }

    //shuffle dates
    shuffleDates = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    render() {
        return (
            <div className='dates-page__container'>
            <h2 className='dates-page__header'>
                Your random date idea is:
            </h2>
            <p>
                {this.state.dateDescription}                               
            </p>
            <div className='add-date-btn__container'>
                <button
                    onClick={this.generateRandomDate} 
                    className='btn generate-btn'
                >
                    Generate Date
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
}