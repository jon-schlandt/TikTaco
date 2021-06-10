import { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'

import { getTacoData } from '../../utils/apiCalls'
import { ITaco } from '../../utils/types'

import './App.css';

function App() {
  const [taco, setTaco] = useState<ITaco | null>(null)
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
