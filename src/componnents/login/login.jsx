import React from 'react'
import { Inputbox, LoginButton } from './inputbox/inputbox'
import "./login.css"
export function Login({ onLoginClick }) {
    
    const handleSubmit =(event)=>{
        event.preventDefault(),
          username = event.target[0].value,
          password = event.target[1].value,
         console.log(username, password)
    }
    return (
        <div className='maincontainer'>
            <div className='login-cencel' onClick={() => onLoginClick(false)}>X</div>
            <div className='login-box'>
                <div className='inleftbox'></div>
                <div className='inrightbox'>
                    <form
                    onSubmit={handleSubmit}
                    className='inrightbox'
                    >
                        <Inputbox
                            placeholder="username"
                        />
                        <Inputbox
                            placeholder="pasword"
                        />
                        <LoginButton
                            type="submit"
                            placeholder="login"
                        />
                    </form>
                    <div className='inputBox-acount-text'>
                        <p>Create Account</p>
                        <p>Forget Password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
