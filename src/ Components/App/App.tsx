import { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'
import ToShare from '../ToShare/ToShare'

import { getTacoDetails } from '../../utils/apiCalls'
import { IShapedTacoDetails } from '../../utils/utilites'

import './App.css';

function App() {
  const [tacoDetails, setTacoDetails] = useState<IShapedTacoDetails | null>(null)
  const [generatedTacos, setGeneratedTacos] = useState<IShapedTacoDetails[]>([])
  const [favorites, setFavorites] = useState<IShapedTacoDetails[]>([])
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoDetails()
      .then(data => {
        window.sessionStorage.setItem('tacoDetails', JSON.stringify(data))

        setTacoDetails(data)
        setGeneratedTacos([...generatedTacos, data])
      })
      .catch(error => setError(error.message))
  }

  const toggleFavorite = (tacoDetails: IShapedTacoDetails) => {
    const foundFavorite = favorites.find(taco => taco.id === tacoDetails.id)

    if (foundFavorite) {
      setFavorites(favorites.filter(taco => taco.id !== tacoDetails.id))
    } else {
      setFavorites([...favorites, tacoDetails])
    }
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <TacoGenerator 
            tacoDetails={tacoDetails}
            error={error}
            handleClick={generateTaco}
          />
        </Route>
        <Route exact path='/details'>
          {(tacoDetails || window.sessionStorage.getItem('tacoDetails')) &&
            <TacoDetails 
              tacoDetails={
                tacoDetails
                  ? tacoDetails
                  : JSON.parse(window.sessionStorage.getItem('tacoDetails'))
              }
              handleClick={toggleFavorite}
            />
          }
        </Route>
        <Route exact path='/to-share'>
          <ToShare favorites={favorites}/>
        </Route>
      </main>
    </div>
  );
}

export default App;
