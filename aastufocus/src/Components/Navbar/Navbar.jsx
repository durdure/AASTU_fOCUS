import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Logo from './../assets/GUGEE focus 2.png'
import Hero from '../Hero/Hero';



const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 550 ? setsticky(true) :setsticky(false)
    } )
  }, [])

  return (
   <nav className= {`container ${ sticky ? 'dark-nav' : ''} `}>
    <img src= {Logo} alt="" className='logo' />
    
    <ul>
      <li>Mana</li>
      <li>Sagantale</li>
      <li>Waaee Keenya</li>
      <li>Dhugaa Baati</li>
      <li><button className='btn'>Nu Qunamuuf</button></li>
    </ul>
   </nav>
  )
}

export default Navbar