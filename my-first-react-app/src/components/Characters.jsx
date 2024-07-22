import React from 'react';

function Characters({ characters, setCharacters }) {
    const resetCharacters = () => {
        setCharacters(null);
    };

    return (
        <div className="characters">
            <button className="btn" onClick={resetCharacters}>
                <span className="back">Volver</span>
            </button>
            <div className="characters-container">
                {characters && characters.map((character, index) => (
                    <div className="character-details" key={index}>
                        <h3>{character.character}</h3>
                        <img src={character.image} alt={character.character} />
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Characters;