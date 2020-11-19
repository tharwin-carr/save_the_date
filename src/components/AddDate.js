import React, { Component } from 'react'
import sampleDates from './SampleDates'
import DateContext from '../DateContext'
import { v4 as uuidv4 } from 'uuid'


export default class AddDate extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = DateContext

    handleSubmit = e => {
        e.preventDefault()
        const newDate = {
            id: uuidv4(),
            dateDescription: e.target['dateDescription'].value
        }
        //this.context.handleDateAdd(newDate)
        //this.props.history.push('/dates')
        console.log(newDate)
        console.log(sampleDates)
    }

    render() {
        return (
            <div className='add-date__container'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <h3 className='add-date__header'>
                        Add New Date:
                    </h3>
                    <textarea
                        name='dateDescription'
                        className='add-date__input'
                        id='input'
                    />
                    <br />
                    <button
                        className='btn add-date__btn'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    
    }
}
