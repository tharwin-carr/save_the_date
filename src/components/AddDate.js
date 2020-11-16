import React from 'react'

export default function AddDate() {
    return (
        <div className='add-date__container'>
            <form>
                <h3 className='add-date__header'>
                    Add New Date:
                </h3>
                <textarea 
                    name='addDate'
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
