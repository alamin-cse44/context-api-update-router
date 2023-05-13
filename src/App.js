import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/layouts/Main";
import Orders from "./components/Orders";

export const testContext = createContext("context api");
const title = 'Welcome to our showroom';

function App() {
  const [number, setNumber] = useState(1); 
  const [test, setTest] = useState([]); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home></Home>,
        },
        {
          path: "orders",
          element: <Orders></Orders>,
        },
      ],
    },
  ]);
  return (
    <testContext.Provider value={[title, number, setNumber, test, setTest]}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </testContext.Provider>
  );
}

export default App;
