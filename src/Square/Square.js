import React, { useRef, useEffect, useState } from 'react';
import './Square.css';

const Square = ({ id, count, winner, moves, setMoves }) => {
  const [symbol, setSymbol] = useState('');
  const ref = useRef();

  useEffect(() => {
    const handleClick = () => {
      if (symbol !== '' || winner === 'X' || winner === 'O') return;
      if (count.current % 2 === 0) {
        setSymbol('X');
        let allMoves = [...moves];
        allMoves[id] = 'X';
        setMoves(allMoves);
        count.current = count.current + 1;
      } else {
        setSymbol('O');
        let allMoves = [...moves];
        allMoves[id] = 'O';
        setMoves(allMoves);
        count.current = count.current + 1;
      }
    };
    let node = ref.current;
    node.addEventListener('click', handleClick);
    return () => {
      node.removeEventListener('click', handleClick);
    };
  }, [count, symbol, winner, id, moves, setMoves]);
  useEffect(() => {
    if (moves.length === 0) setSymbol('');
  }, [moves]);
  return (
    <div className='square' ref={ref}>
      {symbol}
    </div>
  );
};

export default Square;
