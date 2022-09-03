import React, {useState} from 'react';
import techtik2 from '../assets/techtik2.png';
import {HiMenuAlt3} from "react-icons/hi"
import {AiFillLinkedin} from "react-icons/ai"
import './HTml.css';


function Html() {
    const [active, setActive] = useState('nav_menu')
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive ('nav_menu nav_active')
        : setActive('nav_menu');
    }
    return(
            <nav className='nav1'>
                <img src={techtik2} alt="logo" />
                <ul className={active}>
                    <li className='nav_item'>
                        <a href="/" className='nav_link'> Contact Us</a>
                        <a href="https://www.linkedin.com/in/adeyanju-taofeek-82049b218"className='naviconu'><AiFillLinkedin size={17}/> LinkedIn</a>
                    </li>
                </ul>
                <div onClick={navToggle} className='nav_toggler'>
                    <HiMenuAlt3 size={30}/>
                </div>
            </nav>
       
    )
    
}
export default Html;