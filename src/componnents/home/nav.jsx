import React from 'react'
import "./nav.css"
import CenterBox from './center_box';
import { useDispatch } from 'react-redux';
import { loginFunc } from '../../reduxx/slices';
import { Link } from 'react-router-dom';

export function Nav({onLoginClick}) {
    const dispatch =useDispatch()

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
                    <Link to={"/login"}
                    className='navi-login'
                    onClick={()=>dispatch(loginFunc(true))}
                    ><span >Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
