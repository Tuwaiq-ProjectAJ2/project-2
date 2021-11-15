
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <img id="gg"  src= "https://i.pinimg.com/564x/8f/41/ad/8f41ad56459239d6f7c76d13f5962e2e.jpg "/>
     <div className="btn">
       <input type="text" placeholder ="UserName"/>
        <br />
        <br />
        <input type="text" placeholder="PassWord" /><br />
        <br />
        <button>SingIn</button>
      </div>
    </div>
  );
}
