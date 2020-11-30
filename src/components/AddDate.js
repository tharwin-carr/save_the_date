import React, { Component } from 'react'
//import dates from './SampleDates'
import DateContext from '../DateContext'
import SuccessAlert from './SuccessAlert'
import config from '../config'


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
            return 'Date content is required'
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
            this.props.history.push('/dates')
            this.setState({
                alert_message:'success'
            })
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                alert_message: `${error}`
            })
        })
    }

    render() {
        return (
                <div className='add-date__container'>
                    {this.state.alert_message == 'success' ? < SuccessAlert /> : null}
                    <form onSubmit={event => this.handleSubmit(event)}>
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
                        <button
                            className='btn add-date__btn'
                            type='submit'
                            disabled={this.validateDateContent()}
                        >
                            Submit
                        </button>
                    </form>
                </div>
        )    
    }
}