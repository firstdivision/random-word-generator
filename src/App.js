import logo from './logo.svg';
import './App.css';

import randomWord from './random-word-by-letter'


function App() {



  var letters = 
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
   'u', 'v', 'w', 'x', 'y', 'z'];

  var startIx = Math.floor(Math.random() * (letters.length - 1 - 3)); //cannot start after 22 since we need the also get the next 3
  var words = [];

  
  for (let index = 0; index < 4; index++) {
    let letterIndex = startIx + index;
    console.log("getting letter index: " + letterIndex);
    var nextWord = randomWord(letters[letterIndex]);
    console.log("Found next word: " + nextWord);
    words.push(nextWord);
  }

  const listItems = words.map((w) =>    <h3 key={w}>{w}</h3>  );

  return (
    <div className="App">
      <header className="App-header">
        { listItems }
      </header>
    </div>
  );
}

export default App;
