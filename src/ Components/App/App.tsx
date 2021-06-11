import { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'

import { getTacoData } from '../../utils/apiCalls'
import { ITacoData } from '../../utils/utilites'

import './App.css';

function App() {
  const [taco, setTaco] = useState<ITacoData | null>(null)
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoData()
      .then(data => setTaco(data))
      .catch(error => setError(error.message))
  }

  const formatTacoText = () => {
    return (
      <p className='taco-text'>{`${taco.base_layer.name} with ${taco.condiment.name}, ganished with ${taco.mixin.name} topped off with ${taco.seasoning.name} and wrapped in a delicious ${taco.shell.name}`}</p>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <TacoGenerator 
            taco={taco && formatTacoText()}
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
