import React, { useState } from 'react'
import './centerbox.css'
import homeimg from './../../assets/home.jpg'
import { Login } from '../login/login'
export default function CenterBox({onLoginClick, isLoginVigible}) {
    // const [isLoginVigible, setIsLoginVisible] = useState(false)

    return (
        <>
            <div className='main-page-box'>
                <div className='centerBox2'>
                    <div className='main-leftbox'>
                        <div className='leftbox'>
                            <div className='textbox'>
                                <span className='textbox1'>hello!</span>
                                <span className='textbox2'>I Am Parvez Alam</span>
                                <span className='textbox3'>hi, i am full stack web developor fresher, i am know frotend and backend very well, i am using react.js for frotend and node.js for backend base on javacript.</span>
                            </div>
                            <div className='buttonbox'>
                                <button>View Work</button>
                                <button>hire me</button>
                                {/* <div className='view_work'></div>
                            <div className='hire_me'></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='rightbox'>
                        <img src={homeimg} alt="" className='img' />
                    </div>
                </div>
            </div>
            {isLoginVigible && <Login
            onLoginClick ={onLoginClick}
            />}
        </>
    )
}
