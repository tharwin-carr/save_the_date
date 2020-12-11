import React, { Component } from 'react'
import DateContext from '../DateContext'
import config from '../config'
import ValidationError from '../ValidationError'
import ErrorBoundary from '../ErrorBoundary'


export default class AddDate extends Component {
    static contextType = DateContext
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    constructor(props) {
        super(props)
        this.state= {
            content: {
                value: '',
                touched: false
            },
            alert_message: ''
        }
    }

    updateContent(content) {
        this.setState({content: {value: content, touched: true}})
    }

    validateDateContent() {
        const content = this.state.content.value.trim()
        if (content.length === 0) {
            return '*Date content is required'
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const newDate = {
            content: event.target['content'].value
        }
        if (this.validateDateContent()) {
            return
        }
        fetch(`${config.API_ENDPOINT}/dates`, {
            method:'POST',
            body: JSON.stringify(newDate),
            headers: {
                'content-type': 'application/json'
            }            
        })
        .then(res => res.json())
        .then(newDate => {
            this.context.addDate(newDate)
            alert('Date has been submitted successfully!')
            this.props.history.push('/dates')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <div className='add-date__container'>
                    <form id='addDateForm' onSubmit={event => this.handleSubmit(event)}>
                        <h3 className='add-date__header'>
                            Add New Date:
                        </h3>
                        <textarea
                            name='content'
                            className='add-date__input'
                            id='input'
                            onChange={e => {this.updateContent(e.target.value)}}
                        />
                        <br />
                        {this.state.content.value < 1 && <ValidationError message ={this.validateDateContent()} />}
                        <button
                            className='btn add-date__btn'
                            type='submit'
                            disabled={this.validateDateContent()}
                        >
                            Submit
                        </button>
                        <br />
                        <button
                        className='btn back__btn'
                        type='button'
                        onClick={() => this.props.history.push('/dates')}
                        >
                            <span className='back'>
                                Back
                            </span>
                        </button>
                    </form>
                </div>
            </ErrorBoundary>
        )    
    }
}