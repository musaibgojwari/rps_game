import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Game({ myChoice, score, setScore }) {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setcounter] = useState(3)

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissor"];
    var choice = choices[Math.floor(Math.random() * 3)]
    setHouse(choice);
    console.log("choice",choice)
    console.log("my",myChoice)
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
      console.log("triggered scissor rock")
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
    console.log(house)
    newHousePick();
  }, []);

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setcounter(counter-1)
    }, 1000) :Result();
    return () => clearInterval(timer)
  }, [counter,house]);

  console.log("look",house)
  console.log("reuslt",playerWin)

  console.log("boolean",playerWin === "lost")

  return (
    <div className='game'>
     <div className="game__you">
      <span className="text">You picked</span>
      <div className={`icon icon--${myChoice} ${playerWin=='win' ? `icon icon--${myChoice}-winner`: ''}`}></div>
     </div>
     {playerWin === "win" && <div className='game__play'>
      <span className='text'>You Win!</span>
      <Link to="/" className='play-again' onClick={() => setHouse()} >Play Again</Link>
     </div>
      }
      {playerWin === "lost" && <div className='game__play'>
      <span className='text'>You lost!</span>
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
        {counter == 0 ?  <div className={`icon icon--${house} ${playerWin == "lost" ? `icon icon--${house}-winner`: ''}`}></div> : <div className="counter">{counter}</div>}
      </div>
     </div>
  );
}
