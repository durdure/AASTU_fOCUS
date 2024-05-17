import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimolal from './Components/Testimonal/Testimolal'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle ="Sagantalee Kenya" title = "Tajaajiloota jiraan"/>
      <Program/>
      <About/>
      <Title subTitle ="Gallery" title = "Footoo baraattoota aastu focus"/>
      <Gallery/>
      <Title subTitle ="Dhugaa Bahumsaa" title = "Galataa qabnaa"/>
      <Testimolal/>
      <Title subTitle ="Nu Qunamuuf" title = "Yaada qabdan dhiheefachuuf"/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App