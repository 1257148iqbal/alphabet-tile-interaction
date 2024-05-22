import { useState } from 'react';
import './App.css';

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function App() {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = newOutputString.replace(/(.)\1{2,}/g, (match) => '_'.repeat(match.length));
    setOutputString(newOutputString);
  };

  return (
    <div className="App">
      <div className="tile-container">
        {alphabets.map((letter) => (
          <div key={letter} className="tile" onClick={() => handleTileClick(letter)}>
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">Output: {outputString}</div>
    </div>
  );
}

export default App;
