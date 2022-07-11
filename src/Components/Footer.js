import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
    return (
        <div>
            <div className='footer-icon'>
                <div className='fb'><a href='https://www.facebook.com/BreakingBad/'><FaFacebookF className='fb-icon' /></a></div>
                <div className='ins'><a href='https://www.instagram.com/breakingbad/?hl=en'><AiOutlineInstagram className='ins-icon'/></a></div>
                <div className='twi'><a href='https://twitter.com/breakingbad?lang=en'><AiOutlineTwitter className='twi-icon'/></a></div>
            </div>
            <div className='footer-text1'>
                <h3>Mahesh Keswani</h3>
            </div>
            <div className='footer-text2'>
                <h3>Copyright reserved @ 2021</h3>
            </div>
        </div>
    )
}

export default Footer
