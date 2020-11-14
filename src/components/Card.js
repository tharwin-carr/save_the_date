import React from 'react'

export default function Card(props) {
    return (
        <div className='card__container'>
            <div className='card-img'>
                <img src={props.img} alt=' ' />
            </div>

            <div className='card-title__container'>
                <h3 className='card__title'>
                    {props.title}
                </h3>           
            </div>

            <br />

            <div className='card-description__container'>
                <p className='card__description'>
                    {props.description}
                </p>
            </div>            
        </div>
    )
}
