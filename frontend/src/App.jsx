import React, { useState } from 'react'
import Board from './components/Board'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSqaures = history[currentMove]

  // const handleClick
  const handlePlay = (nextSqaures) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqaures];
    setHistory(nextHistory);
    // If someone wants to go back to the previous move
    setCurrentove(nextHistory.length - 1)
  }


  // history record function
  const jumpTo = (nextMove) => {
    setCurrentove(nextMove)
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`
    } else {
      description = "Let's Start the Game"
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })

  return (
    <div className="flex h-screen items-center justify-center gap-8">
      {/* Game Board */}
      <div>
        <Board xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay} />
      </div>
      {/* History Info */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Game History</h2>
        <ol className="list-decimal">{moves}</ol>
      </div>
    </div>
  )
}

export default Game