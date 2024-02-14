import React from 'react'
import Sqaure from './Sqaure'
import calculateWinner from '../utilities/CalculateWinner'

const Board = ({xIsNext,squares,onPlay}) => {
  const handleClick = (i) =>{
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSqaures = squares.slice();
    // console.log(nextSqaures);
    if(xIsNext){
      nextSqaures[i] ="X";
    }else{
      nextSqaures[i] = "0";
    }
    onPlay(nextSqaures)
  }
  const winner  = calculateWinner(squares);

  // Winning status condition
  let status;
  if(winner){
    status = "Winner is: " + winner;
  }else{
    status = "Next Player: " + (xIsNext ? "X" : "O")
  }
  return (
    <>
    <h2 className='mb-2 text-lg'>{status}</h2>
    <div >
        {/* 1st line */}
        <div className='flex'>
            <Sqaure value={squares[0]} onSqaureClick = {()=> handleClick(0)}/>
            <Sqaure value={squares[1]} onSqaureClick = {()=> handleClick(1)}/>
            <Sqaure value={squares[2]} onSqaureClick = {()=> handleClick(2)}/>
        </div>
        {/* 2nd line */}
        <div className='flex'>
            <Sqaure value={squares[3]} onSqaureClick = {()=> handleClick(3)}/>
            <Sqaure value={squares[4]} onSqaureClick = {()=> handleClick(4)}/>
            <Sqaure value={squares[5]} onSqaureClick = {()=> handleClick(5)}/>
        </div>
        {/* 3rd Line */}
        <div className='flex'>
            <Sqaure value={squares[6]} onSqaureClick = {()=> handleClick(6)}/>
            <Sqaure value={squares[7]} onSqaureClick = {()=> handleClick(7)}/>
            <Sqaure value={squares[8]} onSqaureClick = {()=> handleClick(8)}/>
        </div>
    </div>
    </>
  )
}

export default Board