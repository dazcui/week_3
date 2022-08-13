import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
  const resident = useFetch(url)
  console.log(resident);

  return (
    <article className='card'>
      <header>
        
        <img className='img' src={resident?.image} alt={`image of ${resident?.name}`} />
        <div>
          <div className="circle"></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div>
        <h3  className='card_list'>{resident?.name}</h3>
        <ul className='card_list'>
          <li>
            <span>Specie: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li>
            <span>Eppisodes where appear: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>

  )
}

export default CardResident