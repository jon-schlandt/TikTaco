import { useEffect } from 'react'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'

import { getTacoData } from '../../utils/apiCalls'
import './App.css';

function App() {
  useEffect(() => {
    getTacoData()
      .then(data => console.log(data))
  }, [])

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
