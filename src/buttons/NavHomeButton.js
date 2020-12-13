import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../components/logo.png'

export default function NavHomeButton(props) {
    let history = useHistory()

    //takes the user to the selected page
    function handleClick() {
        history.push(`/`)
    }

    return(
        <>
            <button
                className={props.btnClass} 
                type='button'
                onClick={handleClick}>
                    {props.title}
                    <img className='logo' src={logo} alt='calendar with a heart in it' />
                </button>

        </>
    )
}