import React from 'react'
import './CurrentMosam.css'
const CurrentMosam = ({Location, Mosam}) => {
  return (
    <div className='text'>Current Weather of {Location} is {Mosam}</div>
  )
}

export default CurrentMosam;