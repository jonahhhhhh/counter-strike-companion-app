import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";
import { GameResult, getWinningPercentageDisplay } from './counter-strike-game-results';

const counterStrikeResults: GameResult[] = [];

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>(counterStrikeResults);

  const addNewGameResult = (newGameResult: GameResult) => setGameResults(
    [
      ...gameResults
      , newGameResult
    ]
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        winningPercentageDisplay = {getWinningPercentageDisplay(gameResults)}
      />,
    },
    {
      path: "/setup",
      element: <Setup 
      num={num}
      setNum={setNum}
      />,
    },
    {
      path: "/play",
      element: <Play
        addNewGameResult={addNewGameResult}
      />,
    },
  ]);

    return (
        <div className="App">
        <RouterProvider router={router} />
      </div>
  );
};

export default App;
