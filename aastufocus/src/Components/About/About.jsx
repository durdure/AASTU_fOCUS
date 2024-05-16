import React from 'react'
import "./About.css"
import about from "./../assets/about.png"
import playIcon from "./../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
         <img src={about} alt=""  className='about-img'/>
         <img src={playIcon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>WAAEE AASTU FOCUS</h3>
            <h2>waqefanaa</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum beatae culpa exercitationem? Eos error natus incidunt, 
                ex alias libero perferendis quibusdam saepe quae laborum, odio 
                fugiat voluptas? Impedit, amet enim?</p>
        </div>
    </div>
  )
}

export default About