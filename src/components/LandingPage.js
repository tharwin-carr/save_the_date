import React from 'react'
import Hero from './Hero'
import Card from './Card'
import Footer from './Footer'

export default function LandingPage() {
    return (
        <div className='landing-page__container'>
            <Hero />
            <div className='landing-page__info'>
                <h2 className='landing-page__title'>
                    Why Save The Date?
                </h2>
            </div>
            <div className='landing-page__card'>
                <Card
                    img='https://img.icons8.com/dotty/64/000000/running-rabbit.png'
                    title='Quick and Easy'
                    description={`Generate a random date idea with a push of a button. Don't like the suggestion? Press the button again and generate a new idea, it's that simple`}
                />
                <Card 
                    img='https://img.icons8.com/wired/64/000000/infinity.png'
                    title='Possibilites are Endless'
                    description='Never run out of date ideas, Save The Date brings tons of date ideas to your fingertips'    
                />
                <Card
                    img='https://img.icons8.com/pastel-glyph/64/000000/like--v2.png'
                    title='Save Your Favorites'
                    description={`With a click of a button you can save your favorite dates for another day!`}
                />
            </div>
            <footer>
                <Footer />            
            </footer>                    
        </div>
    )
}
