import {Icon   } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/volcano'

const VolcanoMarker = ({lat,lng}) => {
  return (
    <div className='location-marker'>
    <Icon icon={locationIcon} className='location-icon'/>
  
</div>
  )
}

export default VolcanoMarker
