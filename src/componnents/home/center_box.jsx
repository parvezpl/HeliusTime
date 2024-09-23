import React, { useState } from 'react'
import './centerbox.css'
import homeimg from './../../assets/home.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function CenterBox({ onLoginClick }) {
    // const [isLoginVigible, setIsLoginVisible] = useState(false)
    const isLoginVigible = useSelector((state) => state.account.loginStatus)

    return (
        <>
            <div className='main-page-box' style={{filter: isLoginVigible && "blur(20px)"}} >
                <div className='centerBox2'>
                    <div className='main-leftbox'>
                        <div className='leftbox'>
                            <div className='textbox'>
                                <span className='textbox1'>hello!</span>
                                <span className='textbox2'>I Am Parvez Alam</span>
                                <p >hi, i am full stack web developor fresher, i am know frotend and backend very well, i am using react.js for frotend and node.js for backend base on javacript.</p>
                            </div>
                            <div className='buttonbox'>
                                <Link to={"/myworks"} className='link-button' >View Work</Link>
                                <Link to={"/hireme"} className='link-button'>hire me</Link>
                                <div className='view_work'></div>
                                <div className='hire_me'></div>
                            </div>
                        </div>
                    </div>
                    <div className='rightbox-main'>
                        <div className='rightbox'>
                        <img src={homeimg} alt="" className='img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
