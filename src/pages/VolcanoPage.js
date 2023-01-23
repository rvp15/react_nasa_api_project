import React from 'react'
import Volcano from '../components/Volcano'
import { useState,useEffect } from 'react'
import Loader from '../components/Loader'


const VolcanoPage = () => {
    const [volcanodata,setVolcanodata]=useState([])
    const [loading,setLoading] =useState(false)
    
    
    const fetchEvents= async()=>{
      setLoading(true)
      const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await response.json()
      setVolcanodata(events)
      setLoading(false)
    }
    
    useEffect(()=>{
      fetchEvents()
      // console.log(data)
    },[])
      return (
        <div>
    {!loading? <Volcano volcanoData={volcanodata}/> : <Loader/>}
         
        </div>
      )
}

export default VolcanoPage
