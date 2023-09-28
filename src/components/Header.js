import React from 'react'

export default function Header({
  score
}
) {
  return (
    <div className='header'>
      <div className="text">
        <span>Stone</span> <br />
        <span>Paper</span> <br />
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  )
}
