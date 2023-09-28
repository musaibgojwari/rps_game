import React from 'react'
import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'
export default function Play(
    {setmyChoice}
) {

    const setChoice = (e) => {
        setmyChoice(e.target.dataset.id)

        
    }
  return (
    <div className='play'>
        <img src={Triangle} alt="triangle" />
        <div className="items">
            <Link to="/game" >
            <div data-id="paper" onClick={setChoice} className="icon icon--paper">
                Paper
            </div>
            </Link>
            <Link to="/game" >
            <div data-id="scissor" onClick={setChoice} className="icon icon--scissors">
                Scissors
            </div>
            </Link>
            <Link to="/game" >
            <div data-id="rock" onClick={setChoice} className="icon icon--rock">
                Rock
            </div>
            </Link>
        </div>
        
    </div>
  )
}
