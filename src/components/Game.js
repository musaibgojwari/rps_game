import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Game({ myChoice, score, setScore }) {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissor"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  }

  const Result = () => {
    if (myChoice === house) {
      setPlayerWin("draw");
    } else if (myChoice === "paper" && house === "scissor") {
      setPlayerWin("lost");
      setScore(score - 1);
    } 
    else if(myChoice === "paper" && house === "rock") {
      setPlayerWin("win")
      setScore(score+1)
    }
    else if (myChoice === "scissor" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    }
    else if (myChoice === "scissor" && house === "rock") {
      setPlayerWin("lost");
      setScore(score - 1);
    }
    else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lost");
      setScore(score - 1);
    }
    else if (myChoice === "rock" && house === "scissor") {
      setPlayerWin("win");
      setScore(score + 1);
    }
  }

  useEffect(() => {
    newHousePick();
  }, []);

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className='game'>
     <div className="game__you">
      <span className="text">You picked</span>
      <div className={`icon icon--${myChoice}`}></div>
     </div>
     {playerWin === "win" && <div className='game__play'>
      <span className='text'>You Win!</span>
      <Link to="/" className='play-again' onClick={() => setHouse()} >Play Again</Link>
     </div>
      }
      {playerWin === "lose" && <div className='game__play'>
      <span className='text'>You Win!</span>
      <Link to="/" className='play-again' onClick={() => setHouse()} >Play Again</Link>
     </div>
      }
      {playerWin === "draw" && <div className='game__play'>
      <span className='text'>Draw!</span>
      <Link to="/" className='play-again' onClick={() => setHouse()} >Play Again</Link>
     </div>
      }

      <div className="game__house">
        <span className="text">House picked</span>
        <div className={`icon icon--${house}`}></div>
      </div>
     </div>
  );
}
