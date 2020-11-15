import React from 'react'

export default function AddDate() {
    return (
        <div className='add-date__container'>
            <h3 className='add-date__header'>
                Add New Date:
            </h3>
            <textarea 
                name='add-date'
                className='add-date__input'
                id='input'
            />
            <br />
            <button className='btn add-date__btn'>
                Submit
            </button>
        </div>
    )
}
