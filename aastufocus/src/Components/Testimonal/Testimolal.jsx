import React, { useRef } from 'react'
import './Testimonal.css'
import user_1 from './../assets/user-1.png'
import user_2 from './../assets/user-2.png';
import user_3 from './../assets/user-3.png';
import user_4 from './../assets/user-4.png';
import backIcon from './../assets/back-icon.png'
import nextIcon from './../assets/next-icon.png'

const Testimolal = () => {
    const slider = useRef()
    let txt = 0;

    const slideForward = () => {
        if (txt > -50){
            txt -=25;
        }
        slider.current.style.transform = `translateX(${txt}%)`

    }
    const slideBacward = () => {
        if (txt > 0){
            txt +=25;
        }
        slider.current.style.transform = `translateX(${txt}%)`

    }
  return (
    <div className='testimonals'>
        <img src= {nextIcon} alt="" className='next-btn' onClick={slideForward} />
        <img src= {backIcon} alt="" className='back-btn' onClick={slideBacward} />
        <div className='slider'>
                <div className="slide">
                    <ul ref={slider}>
                        <li>
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Mr X</h3>
                                    <span>aastu Focus</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Error optio asperiores eos 
                                    iste odit et nostrum recusandae repudiandae dolore!
                                    Quae libero ducimus maiores aut autem quo officia, 
                                    reiciendis voluptatem tempore?
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Mr X</h3>
                                    <span>aastu Focus</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Error optio asperiores eos 
                                    iste odit et nostrum recusandae repudiandae dolore!
                                    Quae libero ducimus maiores aut autem quo officia, 
                                    reiciendis voluptatem tempore?
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Mr X</h3>
                                    <span>aastu Focus</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Error optio asperiores eos 
                                    iste odit et nostrum recusandae repudiandae dolore!
                                    Quae libero ducimus maiores aut autem quo officia, 
                                    reiciendis voluptatem tempore?
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Mr X</h3>
                                    <span>aastu Focus</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Error optio asperiores eos 
                                    iste odit et nostrum recusandae repudiandae dolore!
                                    Quae libero ducimus maiores aut autem quo officia, 
                                    reiciendis voluptatem tempore?
                                </p>
                            </div>
                        </li>
                    </ul>   
                </div>
        </div>
    </div>
  )
}

export default Testimolal