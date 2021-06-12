import { useState, useEffect } from 'react'
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
  const [generatedTacos, setGeneratedTacos] = useState<IShapedTacoDetails[]>(() => {
    if (window.sessionStorage.getItem('generatedTacos')) {
      return JSON.parse(window.sessionStorage.getItem('generatedTacos'))
    } else {
      return []
    }
  })
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoDetails()
      .then(data => {
        setTacoDetails(data)
        setGeneratedTacos([...generatedTacos, data])
      })
      .catch(error => setError(error.message))
  }

  const toggleFavorite = (tacoDetails: IShapedTacoDetails) => {
    setGeneratedTacos(
      generatedTacos.map(taco => {
        if (taco.id === tacoDetails.id) {
          taco.isFavorited = !(taco.isFavorited)
        }

        return taco
      })
    )
  }

  const getFavorites = () => {
    return generatedTacos.filter(taco => taco.isFavorited)
  }

  useEffect(() => {
    window.sessionStorage.setItem('generatedTacos', JSON.stringify(generatedTacos))
  })

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
        <Route 
          exact path='/details/:id'
          render={({ match }) => {
            return (
              generatedTacos &&
                <TacoDetails 
                  tacoDetails={generatedTacos.find(taco => taco.id === match.params.id)}
                  handleClick={toggleFavorite}
                />
            )
          }}
        >
        </Route>
        <Route exact path='/to-share'>
          <ToShare favorites={getFavorites()}/>
        </Route>
      </main>
    </div>
  );
}

export default App;
