import React from 'react'
import { Link } from 'react-router-dom'
import nasa from './nasa.png'
function NavBar() {
  return (
    
  <div  className='nav'>
    <Link className='navtxt'to='/'><span >Home</span></Link>
      <Link className='navtxt' to='gallery'><span >Explore</span></Link>
      <Link className='navtxt' to='liked'><span >Collection</span></Link>
      <Link className='navtxt' to='wildfire'><span >WildFire</span></Link>
      <Link className='navtxt' to='volcano'><span >Volcano</span></Link> 
       <h3>Powered By <img className='logo' src={nasa} alt='logo'/></h3>
      
    </div>
   
  )
}

export default NavBar
