import React from 'react'
import "./Hero.css"
import dark_arrow from './../assets/darkArrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Nuyii isaa qofaan farsiinaa</h1>
            <p>“Yeroo sanatti Barabbaa kan jedhamu, namni dira'ina isaatiin beekame tokko hidhamee ture.”
  — Mat. 27:16</p>
        <button className='btn'>caalaatti qoradhu <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero