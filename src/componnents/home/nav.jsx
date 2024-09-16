import React from 'react'
import "./nav.css"
import CenterBox from './center_box';
export function Nav({onLoginClick}) {

    const loginbtn =()=>{
        console.log("cleick")
        onLoginClick(true)
    }

    return (
        <>
            <div className='navi'>
                <div className='navi-name'><span>Parvez Alam</span></div>
                <div className='navi-end'>
                    <ul className='navi-option'>
                        <li>home</li>
                        <li>about</li>
                        <li>service</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                    <div className='navi-login'
                    onClick={()=>loginbtn()}
                    ><span >Login</span>
                    </div>
                </div>
            </div>
        </>
    )
}
