import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const App = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // всегда превращаем в ферзя
    });

    if (move === null) return; // наткнулись на ошибку

    setFen(game.fen());
  };

  return (
    <div>
      <h1>Шахматы на React</h1>
      <Chessboard
        position={fen}
        onPieceDrop={onDrop}
      />
    </div>
  );
};

export default App;