import React, {useState} from 'react';
import techtik2 from '../assets/techtik2.png';
import {HiMenuAlt3} from "react-icons/hi"
import {AiFillLinkedin} from "react-icons/ai"
import './contact.css'


function Contact () {
    const [active, setActive] = useState('nav_menu')
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive ('nav_menu nav_active')
        : setActive('nav_menu');
    } 
    const [inputs, setInputs] = useState({});
      const handleChange = (event) =>
      {
        const name = event.target.name;
        const value = event.target.value
        setInputs (values => ({...values, [name]: value}))
      }
    const doSubmit=  (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return(
        <div>
             <nav className='nav2'>
                <img src={techtik2} alt="logo" />
                <ul className={active}>
                    <li className='nav_item'>
                        <a href="/" className='nav_link'> Contact Us</a>
                        <a href="https://www.linkedin.com/in/adeyanju-taofeek-82049b218" className='naviconu'><AiFillLinkedin size={17}/> LinkedIn</a>
                    </li>
                </ul>
                <div onClick={navToggle} className='nav_toggler'>
                    <HiMenuAlt3 size={30}/>
                </div>
             </nav>
            <div className='need_us'>
                <h1>Need us now?</h1>
            </div>
            <div className='reach'>
                <p>Reach us with any of the below contact</p>
                <p>0140563229</p>
                <p>+971-0521550524</p>
            </div>
            <div className='form'>
              <form>
                  <input type="text" placeholder='Name' name='name' value={inputs.name}/> <br />
                  <input type="email" placeholder='Email' name='email' value={inputs.email}/> <br />
                  <textarea name="text" id="#" cols="25" rows="9" placeholder='Enter message here'></textarea> <br />
                  <input type="submit"/>
              </form>
            </div>
        </div>
    )
}
export default Contact;