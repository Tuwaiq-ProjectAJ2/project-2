import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function NavBar() {
  const [Users, setUsers] = useState([]);
  const [Password, setPassword] = useState("");
  const [NewUsers, setNewUsers] = useState("");
  const history = useHistory();

   const interuser = (e) => {
     setNewUsers(e.target.value);
   };
  const interbass = (e) => {
    setPassword(e.target.value);
  };
  const singIn = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      username: NewUsers,
      password: Password,
    });
    if (res.data === "login correct") {
      history.push("/Corses");
    }
    setUsers(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <img
        id="gg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMt3H4azaTASikZxDGnd7wpNH_B5dh-3ing&usqp=CAU"
      />
      <div className="btn">
        <input
          onChange={(e) => {
            interuser(e);
          }}
          type="text"
          placeholder="UserName"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            interbass(e);
          }}
          type="PassWord"
          placeholder="Password"
        />
        <br />
        <br />
        <button
          onClick={(e) => {
            singIn();
          }}
        >
          sign In
        </button>{" "}
      </div>
       <h1>{Users}</h1>  
    </div>
  );
}
