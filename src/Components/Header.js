import React from 'react'
import bg from '../img/backg.jpg';
function Header() {
    return (
  <div className="header-img-div">
      <a href='https://www.youtube.com/watch?v=ZQjqFd2iIWs'><img className='header-bg-img' src={bg} alt="bg" /></a>
      {/* cover image tag with anchor tag to become clickable */}
      <div className='header-img-text'>
        <h1 className='header-img-heading'>Breaking Bad</h1>
        <p>Walt White's transformation from a well-meaning family 
        man to ruthless drug kingpin is almost complete. Newly 
        empowered and increasingly remorseless, Walt find himself
        attempting to control a tenuous empire. But uneasy lies the 
        head that wears the cown.</p>
      </div>
    </div>
    )
}

export default Header
