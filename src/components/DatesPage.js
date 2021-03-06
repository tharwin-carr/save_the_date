import React, { Component } from 'react'
import AddDateButton from '../buttons/AddDateButton'
import config from '../config'
import DateContext from '../DateContext'
import ErrorBoundary from '../ErrorBoundary'

export default class DatesPage extends Component {
    static contextType = DateContext
    constructor() {
        super()
        this.state = {
            dates: [],
            headerMessage: '',
            border: 'false',
            saveBtn: 'false',
        }
        this.handleClickGenerate = this.handleClickGenerate.bind(this)
        this.handleClickSave = this.handleClickSave.bind(this)
    }

    //randomly generates a date idea for the user
    handleClickGenerate(event) {
        event.preventDefault()
        fetch(`${config.API_ENDPOINT}/dates`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                headerMessage:'generatedDate',
                border:'true',
                saveBtn:'true'
            })
            this.generateRandomDate(data)
        })
    }

    //saves the selected date to the favorites page for the user
    handleClickSave(event) {
        const favorite = {
            favorite_id: this.state.dates.id,
        }
        event.preventDefault()
        fetch(`${config.API_ENDPOINT}/favorites`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favorite)
        })
        .then(res => res.json())
        .then(favorite => {
            this.context.favoriteDate(favorite)
            alert('Date was successfully saved as a favorite!')
            this.props.history.push('/favorites')
            window.location.reload()

        })

        .catch((error) => {
            console.log(error)
        })
    }

    //function to generate a random date
    generateRandomDate(date) {
        //get random numbers for new date idea
        let randomNum = Math.floor(Math.random() * date.length)
        let randomDate = date[randomNum]

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
            <ErrorBoundary>
                <div className='dates-page__container'>
                <h2 className='dates-page__header'>
                    {this.state.headerMessage === 'generatedDate' ? 'Your random date idea is:' : `Let's generate a date!`}
                </h2>
                <p 
                    className='dates-page__date'
                    style= {this.state.border === 'true' ? {
                        border: '1px solid black',
                        padding: '30px',
                        width: '60%',
                        margin: '0 auto'
                    } : {display: 'none'}}                
                >
                    {this.state.dates.content}                                            
                </p>
                <div className='add-date-btn__container'>
                    <button
                        onClick={this.handleClickGenerate} 
                        className='btn generate-btn'
                    >
                        Generate Date
                    </button>

                    {this.state.saveBtn === 'true' ? <button className='btn save-btn' onClick={this.handleClickSave}><span className='save'>Save the Date!</span></button> : null}

                    <AddDateButton title='Submit A New Date Idea' />
                </div>
            </div>
        </ErrorBoundary>
        )
    }
}