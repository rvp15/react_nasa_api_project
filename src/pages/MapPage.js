import React from 'react'
import Map from '../components/Map'
import { useState,useEffect } from 'react'
import Loader from '../components/Loader'


const MapPage = () => {
const [data,setData]=useState([])
const [loading,setLoading] =useState(false)


const fetchEvents= async()=>{
  setLoading(true)
  const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
  const {events} = await response.json()
  setData(events)
  setLoading(false)
}

useEffect(()=>{
  fetchEvents()
  // console.log(data)
},[])
  return (
    <div>
{!loading? <Map eventData={data}/> : <Loader/>}
     
    </div>
  )
}

export default MapPage
