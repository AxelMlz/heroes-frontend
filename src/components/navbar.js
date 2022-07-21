import React, { Component } from 'react'
import List from '../views/list.js';
import Homepage from "../views/homepage.js";
import Search from "../views/search.js";
import {Link} from "react-router-dom";


export default function Navbar () {

    return (
      <div>
        
        <nav>

            <ul> 
                <li> 
                <Link to="/">Home</Link>  
                </li>
                <li> 
                <Link to="/list">List</Link>  
                </li>
                <li> 
                <Link to='/search'>Search</Link>
                </li>
            </ul>

</nav>

      </div>
    )
  }

