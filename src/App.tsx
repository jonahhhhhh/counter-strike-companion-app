import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import {Home} from "./Home";
import {Setup} from "./Setup";
import {Play} from "./Play";

const App = () => {

  const [num, setNum] = useState(1);

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
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
      element: <Play />,
    },
  ]);

    return (
        <div className="App">
        <RouterProvider router={router} />
        <h3>Games Played: {num}</h3>
        <h3>Games Won:</h3>
        <h3>Games Lost:</h3>
        <h3>W/L Ratio:</h3>
      </div>
  );
};

export default App;
