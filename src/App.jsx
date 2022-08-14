import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if (searchInput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/ ${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])

  //buscar por input
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }



  // console.log(searchInput)
  return (
    <div className="App">
      <div className='header_first'>
        <h1>Rick and Morty Wiki</h1>
        <form onSubmit={handleSubmit}>
          <input id='search' type="text" placeholder='type a location id' />
          <button>Search</button>
        </form>
      </div>


      <LocationInfo location={location} />
      <div className='cardResidente'>

        {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
