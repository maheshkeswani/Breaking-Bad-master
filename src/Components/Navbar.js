import React from 'react'

function Navbar(props) {
    return (
        <div className='navbar'>
            <ul>
            <li><a href="#Episodes">
            <div className='navbar-btn-div'>
            {
                (props.currpage === 'episodes')?
                <button className='Navbar-button active' onClick= {() => {props.setCurrpage('episodes')}}>Episodes</button>
                :
                <button className='Navbar-button' onClick= {() => {props.setCurrpage('episodes')}}>Episodes</button>
            } 
            </div>
            </a></li>
            <li><a  href="#Explore">
            <div className='navbar-btn-div'>
            {
                (props.currpage === 'explore')?
                <button className='Navbar-button active' onClick= {() => {props.setCurrpage('explore')}}>Explore</button>
                :
                <button className='Navbar-button' onClick= {() => {props.setCurrpage('explore')}}>Explore</button>
            }
            </div>
            </a></li>
            </ul>
        </div>
    )
}

export default Navbar
