import { useState } from "react";
import Characters from './Characters';
import simpsonsImage from '../img/thesimpsons.jpg';


function App() {
    const [characters, setCharacters] = useState(null);
  
    const getCharacters = async () => {
      try {
        const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=16');
        
          if (!response.ok) {
              throw new Error('Error');
          }
          const data = await response.json();
          console.log(data);
          let charactersMap = data.map(item => {
            return [item.character, item]
          })
          let characterMapArr = new Map(charactersMap);
          let uniqueCharacters = [...characterMapArr.values()];
          console.log(uniqueCharacters);
          setCharacters(uniqueCharacters);
      } catch(error) {
        console.error('Error', error);
      }
      
    };
  
    return (
      <div className='App'>
        <header className='App-header'>
        
          {characters ? (
            <div>
              <h2 className=''>Characters</h2>
              <Characters characters={characters} setCharacters={setCharacters} />
            </div>
          ) : (
            <div className='center-content'>
              <h1>The Simpsons</h1>
              <img src={simpsonsImage} className="img-prin" alt="the simpsons" />
              <button className='btn' onClick={getCharacters}>See Characters</button>
            </div>
          )}
        </header>
      </div>
    );
  }

  export default App