import React from "react";
import { Link } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import {BsFillPersonLinesFill}from"react-icons/bs";
import{BsInfoCircleFill}from"react-icons/bs";
import{AiOutlinePoweroff}from"react-icons/ai";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/NavBar"><AiOutlinePoweroff/></Link>
        </li>
        {/* <li>
          <Link to="/">Home </Link>
        </li> */}

        {/* <li>
          <Link to="/NavBar">SignIn</Link>
            
          </li> */}
        <li>
          <Link to="/Corses">
            {" "}
            <ImHome3 />
          </Link>
        </li>
        <li>
          <Link to="/Personal"><BsFillPersonLinesFill/></Link>
        </li>
        <li>
          <Link to="/about"><BsInfoCircleFill/></Link>
        </li>
      </ul>

      {/* <p id="home"> Welcome to the hour of code</p> */}
    </div>
  );
}
