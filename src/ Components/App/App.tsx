import { useState, useEffect } from 'react'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'

import { getTacoData } from '../../utils/apiCalls'
import './App.css';

interface Taco {
  base: string,
  mixin: string, 
  condiment: string, 
  seasoning: string,
  shell: string
}

function App() {
  const [taco, setTaco] = useState<Taco>({
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

  console.log(taco)

  return (
    <div className="App">
      <Header />
      <main>
        <TacoGenerator />
      </main>
    </div>
  );
}

export default App;
