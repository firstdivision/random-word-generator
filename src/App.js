import logo from './logo.svg';
import './App.css';

import randomWord from './random-word-by-letter'


function makeWords()
{
  
  var letters = 
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
   'u', 'v', 'w', 'x', 'y', 'z'];

  var startIx = Math.floor(Math.random() * (letters.length - 1 - 3)); //cannot start after 22 since we need the also get the next 3
  var words = [];

  
  for (let index = 0; index < 4; index++) {
    let letterIndex = startIx + index;
    var nextWord = randomWord(letters[letterIndex]);
    words.push(nextWord);
  }

  console.log("words is", words);
  return words.map((w) =>    <h3 key={w}>{w}</h3>  );

}

function refresh(){
  console.log("refreshing");
  words = makeWords();
}

let words;

function App() {

  refresh();

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button onClick={refresh}>  
          Refresh
        </button>
        </div>
          { words }
      </header>
    </div>
  );
}

export default App;
