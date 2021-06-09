import { useState, useEffect } from 'react'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'

import { getTacoData } from '../../utils/apiCalls'
import './App.css';

interface ITaco {
  base: string,
  mixin: string, 
  condiment: string, 
  seasoning: string,
  shell: string
}

function App() {
  const [taco, setTaco] = useState<ITaco>({
    base: '',
    mixin: '',
    condiment: '',
    seasoning: '',
    shell: ''
  })

  useEffect(() => {
    getTacoData()
      .then(data => setTaco(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <TacoGenerator taco={taco}/>
      </main>
    </div>
  );
}

export default App;
