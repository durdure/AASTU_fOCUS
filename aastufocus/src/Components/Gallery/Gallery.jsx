import React from 'react'
import './Gallery.css'
import gall from './../assets/about.png'
import whiteArrow from './../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='footoo'>
        <div className="gallery">
            <img src={gall} alt="" />
            <img src={gall} alt="" />
            <img src={gall} alt="" />
            <img src={gall} alt="" />
        </div>
        <button className='btn dark-btn'>kanan caalattii ilaaludhaf <img src={whiteArrow} alt="" /></button>
    </div>
  )
}

export default Gallery