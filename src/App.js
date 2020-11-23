import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from "./pages/Home"

import useSticky from "./hooks/useSticky.js"

function App() {
  const { isSticky, element } = useSticky()
  return (
    <Router>
      <Navbar sticky={isSticky}/>
      <Home element={element}/>
    </Router>
  

  );
}

export default App;