import React, { useState } from 'react' 
import Board from './Board';
import Utils from './Utils';

function Game (){
  const [history,setHistory]= useState([Array(9).fill(null)]);
  const [stepNumber,setStepNumber]= useState(0);
  const [xIsNext,setXIsNext]= useState(true);
  const winner = Utils(history[stepNumber]);


  const jumpTo=(step)=>{
    setStepNumber(step);
    setXIsNext((step%2)===0);
 
    }


  const handleClick=(i)=>{
    const historyPoint = history.slice(0,stepNumber+1);
      const current = historyPoint[stepNumber];
      const squares = current.slice();
      if (Utils(squares) || squares[i]) {
            return;
          }
          squares[i] =xIsNext ? 'X' : 'O';
          setHistory([...historyPoint,squares])
          setStepNumber(historyPoint.length);
          setXIsNext(!xIsNext);
           
  }


  const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });


  let status;
  
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return(
          <div className="game">
            <div className="game-board">
              <Board
                squares={history[stepNumber]}
                onClick={ handleClick}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        
        );
   }


export default Game;