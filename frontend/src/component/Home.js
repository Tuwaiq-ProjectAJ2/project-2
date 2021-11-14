import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    
    (
      
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
         
          <li>
            <Link to="/Corses">Corses</Link>
          </li>
          <li>
            <Link to="/Personal">Personal</Link>
          </li>
          <li>
            <Link to="/NavBar">NavBar</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      
        
      </div>
      
    )
  );
}
