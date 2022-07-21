import React from "react";
import logo from './logo.svg';
import './App.css';
import List from './views/list.js';
import Homepage from "./views/homepage.js";
import Search from "./views/search.js";
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div> 

  <Router>
    
      <Navbar/>

          <Routes>

            <Route exact path='/' element={<Homepage/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/search' element={<Search />}/>

          </Routes>

      <Footer/>

  </Router>

    </div>

  );
}

export default App;
