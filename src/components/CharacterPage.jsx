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
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
        <p><strong>Hair Color:</strong> {character.hair}</p>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Planet:</strong> {character.origin}</p>
      </div>
    </div>
  );
};

export default CharacterPage;
