import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error('Error fetching character:', error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-4 bg-gray-100 shadow-lg rounded-lg">
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <img
        src={character.image}
        alt={character.name}
        className="w-64 h-64 rounded-full mb-6 border-4 border-gray-300 shadow-lg"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{character.name}</h2>
  
      <div className="text-lg space-y-2">
        <p className="text-gray-600"><strong>Hair Color:</strong> {character.hair}</p>
        <p className="text-gray-600"><strong>Status:</strong> {character.status}</p>
        <p className="text-gray-600"><strong>Species:</strong> {character.species}</p>
        <p className="text-gray-600"><strong>Gender:</strong> {character.gender}</p>
        <p className="text-gray-600"><strong>Planet:</strong> {character.origin}</p>
      </div>
  
    
    </div>
  </div>
  
  );
};

export default CharacterPage;
