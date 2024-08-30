import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iusto recusandae natus illum aperiam maiores quaerat est nemo nihil a fuga aut vitae et commodi veniam, perferendis maxime dolor animi.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
           <h2>Get In Touch</h2>
           <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomoto.com</li>
           </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024  © Tomoto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
