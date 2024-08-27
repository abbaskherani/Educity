import React from 'react'
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a journey of transformative educational path with our University's comprehensive Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt repellat earum ratione. Unde velit libero at dolor, ab quam animi minus rerum, voluptatibus, laudantium porro. Repellat ratione nobis voluptatem!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel voluptas. Odit aspernatur magni voluptate nobis, nihil voluptatem reprehenderit ad nulla nam sapiente nisi molestias ut minima ipsam ullam unde?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum nisi aspernatur sequi autem necessitatibus dolore, quia possimus odio a perferendis eius consectetur ipsum commodi aliquam. Veniam sed dicta nihil?</p>
        </div>
    </div>
  )
}

export default About