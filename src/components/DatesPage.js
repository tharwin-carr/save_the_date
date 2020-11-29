import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import dates from './SampleDates'
import config from '../config'
import DateContext from '../DateContext'

export default class DatesPage extends Component {
    static contextType = DateContext
    constructor() {
        super()
        this.state = {
            dates: []
        }
        this.handleClickGenerate = this.handleClickGenerate.bind(this)
    }

    handleClickGenerate(event) {
        event.preventDefault()
        fetch(`${config.API_ENDPOINT}/dates`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                dates: data
            })
            this.generateRandomDate(data)
        })
    }

    //function to generate a random date
    generateRandomDate(date) {
        //get random numbers for new date idea
        let randomNum = Math.floor(Math.random() * date.length)
        let randomDate = date[randomNum]

        //update state
        this.setState({
            dates: randomDate
        })

        this.shuffleDates(date)
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
                {this.state.dates.content}                               
            </p>
            <div className='add-date-btn__container'>
                <button
                    onClick={this.handleClickGenerate} 
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