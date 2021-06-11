import { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'

import { getTacoDetails } from '../../utils/apiCalls'
import { IShapedTacoDetails } from '../../utils/utilites'

import './App.css';

function App() {
  const [tacoDetails, setTacoDetails] = useState<IShapedTacoDetails | null>(null)
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoDetails()
      .then(data => {
        window.sessionStorage.setItem('tacoDetails', JSON.stringify(data))
        setTacoDetails(data)
      })
      .catch(error => setError(error.message))
  }

  const formatDisplayText = () => {
    return (
      <p className='taco-text'>{`${tacoDetails.base_layer.name} with ${tacoDetails.condiment.name}, ganished with ${tacoDetails.mixin.name} topped off with ${tacoDetails.seasoning.name} and wrapped in a delicious ${tacoDetails.shell.name}`}</p>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <TacoGenerator 
            tacoText={tacoDetails && formatDisplayText()}
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
            />
          }
        </Route>
      </main>
    </div>
  );
}

export default App;
