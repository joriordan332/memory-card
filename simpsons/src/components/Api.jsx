import { useState } from "react";

import bart from '../img/bart.png';
import homer from '../img/homer.png';
import lisa from '../img/lisa.png';
import marge from '../img/marge.png';
import abe from '../img/abe.png';
import apu from '../img/apu.png';
import milhouse from '../img/milhouse.png';
import skinner from '../img/skinner.png';
import ralph from '../img/ralph.png';
import mrburns from '../img/mrburns.png';
import wiggum from '../img/wiggum.png';
import nelson from '../img/nelson.png';


const Images = [
  bart,
  homer,
  lisa,
  marge,
  abe,
  apu,
  milhouse,
  skinner,
  ralph,
  mrburns,
  wiggum, 
  nelson
];

const shuffleArray = (input) => {
  return input.slice().sort(() => Math.random() - 0.5);
};

const Component = () => {
  const [images, setImages] = useState(shuffleArray(Images));
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = (image) => {
    if (clickedImages.includes(image)) {
      alert('Game over')
      setImages(shuffleArray(Images));
      setClickedImages([]);
      setScore(0);
      if(score > highScore) {
        setHighScore(score)
      }
      
    } else {
      setScore(prevScore => prevScore + 1)
    }


    setClickedImages(current => [...current, image]);
    
    if (score > 10) {
      alert('You win')
      setScore(0);
      setClickedImages([]);
      if(score > highScore) {
        setHighScore(12)
      }
    }

    setImages(shuffleArray(Images));
    console.log(score);
  };
  

  return (
    <div>
    <div className="scores">
      <p className="currentScore">Score: {score}</p>
      <p className="highScore">High Score: {highScore}</p>
    </div>
    <div className="card">
      {images.map((img) => (
        <img
          key={img}
          src={img}
          alt={img}
          onClick={() => incrementScore(img)}
        />
      ))}
    </div>
    </div>
  );
};


  export default Component