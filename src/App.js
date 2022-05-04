import './App.css';
import React from "react";
import {Routes,  Route, Link} from "react-router-dom";
import Home from "./pages/home";
import Explore from './pages/explore';
import Activity from './pages/activity';


function App() {
  return(
          <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/Explore"  element={<Explore />} />
                <Route path="/Activity"  element={<Activity />} />
          </Routes>   
          
  )
}

export default App;
