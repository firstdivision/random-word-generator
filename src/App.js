import logo from './logo.svg';
import './App.css';


import RandomWordComponent from './random-word-component'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-Description">
          Written for a song prompt, this will generate four random english-language words
          with consecutive starting letters.  For example a, b, c, d.
        </p>
        <RandomWordComponent />
      </header>
    </div>
  );
}

export default App;
