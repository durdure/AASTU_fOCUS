import React from 'react'
import program from './../assets/Program.png'
import program1 from './../assets/Program1.png'
import program2 from './../assets/Program2.png'
import './Program.css'

const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src= {program} alt="" />
            <div className="caption">
              <img src="" alt="" />
              <p>Yeroo waqefanaa</p>
            </div>
        </div>
        <div className='program'>
          <img src={program} alt="" />
         
              <img src="" alt="" />
              <p>Yeroo waqefanaa</p>
        </div>
        
        <div className='program'>
          <img src={program} alt="" />
          <img src="" alt="" />
              <p>Yeroo waqefanaa</p>
        </div>
    </div>
  )
}

export default Program