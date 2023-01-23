import React from 'react'
import DisplayBetween from '../components/DisplayBetween';

function Gallery() {
  return (
    <div className='gallerypage'>
           <h1>Explore more Pictures</h1>  <span>Select dates to view previous PODs</span><br />
         <DisplayBetween/>
    </div>
  )
}

export default Gallery
