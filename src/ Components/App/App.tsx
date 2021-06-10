import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'
import TacoDetails from '../TacoDetails/TacoDetails'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path='/'>
          <TacoGenerator />
        </Route>
        <Route exact path='/details'>
          <TacoDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
