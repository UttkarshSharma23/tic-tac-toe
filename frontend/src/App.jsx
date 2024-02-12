import React from 'react'
import Board from './components/Board'

const Game = () => {
  return (
    <div className=' flex h-screen items-center justify-center gap-8'>
      {/*Game Board  */}
      <div>
        <Board />
      </div>
      {/* History Info */}
      <p>Let's Start Game</p>
    </div>
  )
}

export default Game