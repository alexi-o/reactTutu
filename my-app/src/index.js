import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Board from './components/board'
import Game from './components/game'
import Square from './components/square'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
