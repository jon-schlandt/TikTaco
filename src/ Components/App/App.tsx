import Header from '../Header/Header'
import TacoGenerator from '../TacoGenerator/TacoGenerator'

import './App.css';

function App() {
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
