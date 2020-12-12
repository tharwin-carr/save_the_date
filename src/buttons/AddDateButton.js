import React from 'react'
import { useHistory } from 'react-router-dom'

export default function AddDateButton(props) {
    let history = useHistory();

    function handleClick() {
        history.push(`/add-date`)
    }

    return(
        <button
            className='btn add-date-btn' 
            type='button'
            onClick={handleClick}>
                <span className ='add'>
                {props.title}
                </span>
            </button>
    )
}