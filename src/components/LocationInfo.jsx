import React from 'react'

const LocationInfo = ({location}) => {

// console.log(location);

  return (
    <article className='info'>
        <h2>{location?.name} </h2>
        <ul className='loc_info'>
            <li><span>Type:</span>{location?.type}</li>
            <li><span>Dimension:</span>{location?.dimension}</li>
            <li><span>Population:</span>{location?.residents.length}</li>
        </ul>
        <h1>Residents</h1>
    </article>
  )
}

export default LocationInfo