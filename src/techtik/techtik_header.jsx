import React from 'react';
import techtik2 from '../assets/techtik2.png';
import nwp from '../assets/nwp.png';
import logo from '../assets/logo.svg'

import {FcPrivacy} from 'react-icons/fc';


function Header() {

    return(
         <div className='All'>
            <div className='header_menu'>
              <img src={techtik2} className='App-logo' alt="logo"/>
              <a href="google.com"> Contact Us</a>
              
            </div>
            <div className='content'>
                <h2>The Technology for your business</h2>
                <h1> A fight on security  threats to 
                  <h1 className='df'> protect your  businesses.</h1>
                </h1>
                <br />
                <p> With the aim of technology authentication and security, we bring to you <b>TechTik</b> <br /> to help solve web solutions.</p>
            </div>
            <div className='link_contact'>
                <p>Have questions? <a href="#">Contact our sales team</a></p>
            </div>
            <div className='care'>
                <div className='icu'>
                    <i><FcPrivacy size={30}/></i>
                </div>
                <div className='careu'>
                     <p>We care about your privacy:</p>
                     <a href="#">Learn more</a>
                </div>
            </div>
            <div className='me'>
                <div className='just_us'>
                <h1>Help your company fight<br />
                security issues that persist</h1>
                <p>Our over 30 developers are ready to help <br />your company fight web threats and security <br />
                breach to help your business run smoothly</p>
                </div>
                <div className='mobileflex'>
                  <img src={nwp} alt="just-img" />
                </div>
            </div>
            <div className='conten'>
                <h2>Technology for you</h2>
                <h1> CyberTech at its peak
                </h1>
                <br />
                <p> Seemless work to ensure productivity, managing your <br /> security like never before.</p>
            </div>
            <div className='link_contac'>
                <p>Your privacy is our priority <a href="#">Privacy policies</a></p>
            </div>
            <div className='contact_container'>
                <div className='qt'>
                   <h1>Questions?</h1>
                   <p>Talk to us</p>
                </div>
                <div className='q_content'>
                    <p>
                         Get in touch with us to learn more about <br /> our service and how we can help you and your business 
                    </p>
                </div>
                <div className='qt_contactus'>
                <a href="google.com"> Contact us</a>
                </div>
            </div>
            <div className='free_container'>
                <h1>About us</h1>
                <p>
                    We are technology company whose aim is to tackle  authentication and security from serial attacks like ransomware, our company has proved its eligibility with different companies around the globe, mainly in Africa and Europe and we will continue to make sure we serve a purpose to fight web attacks with our over 20 software engineers and 10 cyber security experts, and we are looking for more as we grow.
                </p>
            </div>
            <div className='footer'>
                <div className='privacy'>
                <a href="#">Privacy policies</a>
                </div>
                <br />
                <div className='careers'>
                <a href="#">Careers</a>
                </div>
                <br />
                <div className='terms'>
                <a href="#">Terms </a>
                </div>
                <br />
                <div className='twitter'>
                <a href="#">Twitter</a>
                </div>
                <br />
                <div className='linkedin'>
                <a href="#">linkedIn</a>
                </div>
            </div>
            <div className='footer2'>
                    <img src={techtik2} alt="" />
                    <div className='madeit'>
                    <h1>Made with <img src={logo} alt="" /> in Europe</h1>
                    </div> 
                </div>
        </div>
    )
    
}
export default Header;