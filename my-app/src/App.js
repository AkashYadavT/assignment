import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [move, setMoveToNext] = useState('X');
  const [winner,setWinner]=useState(null);

  function Square({ value, index }) {
    return (
      <button
        className="square"
        onClick={() => !winner?passPosition(index):''}
      >
        {value}
      </button>
    );
  }

  const passPosition = (index) => {
    if (squares[index]) return;

    setSquares(prevSquares => {
      const newSquares = [...prevSquares];
      newSquares[index] = move;
      return newSquares;
    });

    setMoveToNext(prev => (prev === 'X' ? 'O' : 'X'));
  };

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
}
return null;
}

  useEffect(() => {
     setWinner(calculateWinner(squares));
    console.log('Winner:', winner);
  }, [squares]);
  

  return (
    <div className="MiddleBody">
      <div className="status">{winner ? `Winner: ${winner}` : `Next player: ${move}`}</div>

      <div className="board-row">
        <Square value={squares[0]} index={0} />
        <Square value={squares[1]} index={1} />
        <Square value={squares[2]} index={2} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} />
        <Square value={squares[4]} index={4} />
        <Square value={squares[5]} index={5} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} />
        <Square value={squares[7]} index={7} />
        <Square value={squares[8]} index={8} />
      </div>
      <div>
         <button className="reset-button" onClick={() => {
      setSquares(Array(9).fill(null));
      setWinner(null);
      setMoveToNext('X');
    }}>
      Reset Game
    </button>
      </div>
   
    </div>
  );
}

export default App;
