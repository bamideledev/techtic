import React from 'react'
import './footer.css';
import logo from '../assets/logo.svg';
import techtik2 from '../assets/techtik2.png';

function Footer () {
    return(
        <div className='footer2'>
                    <img src={techtik2} alt="" />
                    <div className='madeit'>
                    <h1>Made with <img src={logo} alt="" /> in Europe</h1>
                    </div> 
                </div>
    )
}
export default Footer;