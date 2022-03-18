import React from "react";
import randomWord from '../random-word-by-letter'

export default class RandomWordComponent extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            words: ''
        }
    }

    componentDidMount()
    {
        this.makeWords();
    }

    makeWords = () => {

        var letters =
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z'];

        var startIx = Math.floor(Math.random() * (letters.length - 1 - 3)); //cannot start after 22 since we need the also get the next 3
        var words = [];


        for (let index = 0; index < 4; index++) {
            let letterIndex = startIx + index;
            var nextWord = randomWord(letters[letterIndex]);
            words.push(nextWord.toUpperCase());
        }
        
        this.setState({
            words: words.map((w) => <h2 key={w}>{w}</h2>)
        });

    }

    render() {

        return (
            <div>
                <h2><a href="#" className="App-link" onClick={this.makeWords}>REFRESH WORDS</a></h2>
                { this.state.words }
            </div>
        );
    }
}