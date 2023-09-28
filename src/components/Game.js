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
    </div> 
  );
}

/*  myChoice:{myChoice} <br />
      houseChoice: {house} <br />
      Result:
      {playerWin === "win" && <Link to"/"> <h4>You win!</h4>}
      {playerWin === "lost" && <h4>You lose!</h4>}
      {playerWin === "draw" && <h4>Draw!</h4>}

      <Link to="/" onClick={() => setHouse()}>Play Again!</Link> */
