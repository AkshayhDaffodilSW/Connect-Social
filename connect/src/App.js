import React from  'react';
import HomePage from './Components/Main/HomePage';
import Firstpage from './Components/Entry/Firstpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Firstpage/>,
    },
    {
      path: "/home",
      element: <HomePage/>
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
