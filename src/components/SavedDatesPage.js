import React, { Component } from 'react'
import DateContext from '../DateContext'


export default class SavedDatesPage extends Component {
    static defaultProps = {
        match: {
            params:{}
        }
    }
    static contextType = DateContext
    render() {
        let savedDates = this.context.savedDates
        return (
            <div>
                <ul>
                    {savedDates.map(date =>
                    <li key={date.id}>
                        {date.content}                        
                    </li>
                    )}
                </ul>
                
            </div>
        )
    }
}