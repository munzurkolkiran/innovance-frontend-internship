import React from 'react'

const Move = ({history ,setXIsNext ,setStepNumber})=> { 
    
  const jumpTo=(step)=>{
    setStepNumber(step);
    setXIsNext((step%2)===0);
    }

        const move =  history.map((step, move) => 
        <li> 
         <button onClick={() => jumpTo(move)}>{move ? `Go to move # ${move}`:`Go to game start`}</button>
       </li>
    )
      return (
        <ol key={move}>
         {move}
        </ol>
      );    

        }
export default Move;
