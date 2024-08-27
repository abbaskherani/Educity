import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
                We Ensure better education for a better world
            </h1>
            <p>Our cutting edge education curriculum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam minus soluta molestiae officiis atque error suscipit facilis deserunt vel, enim dolore magni quidem impedit unde laudantium, omnis dolorum veniam?</p>
            <button className='btn'>
                Explore More <img src={dark_arrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Hero