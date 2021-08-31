import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import SiteNotification from '../SiteNotification/SiteNotification'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'
import Favorites from '../Favorites/Favorites'
import Footer from '../Footer/Footer'

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
      <SiteNotification />
      <Route exact path='/'>
        <main>
          <TacoGenerator 
            tacoDetails={tacoDetails}
            error={error}
            handleClick={generateTaco}
          />
        </main>
        <Footer isHome={true} />
      </Route>
      <Route 
        exact path='/details/:id'
        render={({ match, history }) => {
          return (
            generatedTacos &&
              <>
                <main className='details'>
                  <TacoDetails 
                    tacoDetails={generatedTacos.find(taco => taco.id === match.params.id)}
                    handleClick={toggleFavorite}
                  />
                </main>
                <Footer 
                  isHome={false}
                  handleClick={history.goBack}
                />
              </>
          )
        }}
      >
      </Route>
      <Route 
        exact path='/favorites'
        render={({ history }) => {
          return (
            <>
              <main>
                <Favorites 
                  favorites={getFavorites()}
                  handleClick={toggleFavorite} 
                />
              </main>
              <Footer 
                isHome={false}
                handleClick={history.goBack}
              />
            </>
          )
        }}
      />
    </div>
  );
}

export default App;
