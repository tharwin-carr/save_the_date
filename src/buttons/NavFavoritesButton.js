import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NavFavoritesButton(props) {
    let history = useHistory();

    function handleClick() {
        history.push(`/favorites`)
    }

    return(
        <button
            className={props.btnClass} 
            type='button'
            onClick={handleClick}>
                {props.title}
            </button>
    )
}