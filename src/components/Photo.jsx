import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterPage from './CharacterPage'; 
function Photo() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Characters</h1>
        <div className="grid grid-cols-3 gap-4">
          {characters.map(character => (
            <Link to={`/character/${character.id}`} key={character.id}>
              <div className="bg-gray-200 p-4 rounded-lg hover:shadow-lg">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      
  );
}

export default Photo;
