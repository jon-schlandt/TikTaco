import { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'

import { getTacoData } from '../../utils/apiCalls'
import { ITaco } from '../../utils/types'

import './App.css';

interface IState {
  toppings: ITaco,
  urls: ITaco
}

function App() {
  const [taco, setTaco] = useState<IState | null>(null)
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoData()
      .then(data => setTaco(data))
      .catch(error => setError(error.message))
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <TacoGenerator 
            taco={taco && taco.toppings}
            error={error}
            handleClick={generateTaco}
          />
        </Route>
        <Route exact path='/details'>
          <TacoDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
