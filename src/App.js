import './App.css';
import Logo from './components/logo'
import React from "react";
import {Routes,  Route} from "react-router-dom";
import Home from "./pages/home";
import Explore from './pages/explore';
import Activity from './pages/activity';
import Search from './components/search';

function App() {
  return(
    <header >
      <form>
        <div className="container">
          <Logo />
          <Search /> 
          <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/Explore"  element={<Explore />} />
                <Route path="/Activity"  element={<Activity />} />
          </Routes>
        </div>
      </form>
    </header>
  )
}

export default App;
