import React, { useRef, useEffect, useState } from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board = () => {
  const count = useRef(0);
  const [winner, setWinner] = useState('None');
  const [moves, setMoves] = useState([]);
  useEffect(() => {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
      setWinner(moves[0]);
    } else if (moves[3] === moves[4] && moves[4] === moves[5]) {
      setWinner(moves[3]);
    } else if (moves[6] === moves[7] && moves[7] === moves[8]) {
      setWinner(moves[6]);
    } else if (moves[0] === moves[3] && moves[3] === moves[6]) {
      setWinner(moves[0]);
    } else if (moves[1] === moves[4] && moves[4] === moves[7]) {
      setWinner(moves[1]);
    } else if (moves[2] === moves[5] && moves[5] === moves[8]) {
      setWinner(moves[2]);
    } else if (moves[0] === moves[4] && moves[4] === moves[8]) {
      setWinner(moves[0]);
    } else if (moves[2] === moves[4] && moves[4] === moves[6]) {
      setWinner(moves[2]);
    } else {
      return;
    }
  }, [moves]);
  const handleReset = () => {
    setMoves([]);
    setWinner('None');
    count.current = 0;
  };
  return (
    <div className='board'>
      <span>
        Player's Turn : <span>{count.current % 2 === 0 ? 'X' : 'O'}</span>
      </span>
      <span>
        Winner : <span>{winner}</span>
      </span>
      <button className='reset' onClick={handleReset}>
        Reset
      </button>
      <br />
      <div className='squares'>
        <div className='squares-row'>
          <Square id={0} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={1} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={2} count={count} moves={moves} setMoves={setMoves} winner={winner} />
        </div>
        <div className='squares-row'>
          <Square id={3} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={4} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={5} count={count} moves={moves} setMoves={setMoves} winner={winner} />
        </div>
        <div className='squares-row'>
          <Square id={6} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={7} count={count} moves={moves} setMoves={setMoves} winner={winner} />
          <Square id={8} count={count} moves={moves} setMoves={setMoves} winner={winner} />
        </div>
      </div>
    </div>
  );
};

export default Board;
