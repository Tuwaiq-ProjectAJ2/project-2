import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
export default function Corses() {
  const [corses1, setCorses1] = useState([]);
  const [newCorses, setNewCorses] = useState("");

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/courses");
    console.log(res.data);
    setCorses1(res.data);
  }, []);
  

  const searchCorse = (e) => {
    setNewCorses(e.target.value);
  };

  const carshed=async()=>{
console.log(newCorses);
const res = await axios.get(`http://localhost:5000/serch/${newCorses}`);
    setCorses1(res.data);


  }

  const history = useHistory()


  const changePage =(id)=>{
    history.push(`/Corse/${id}`)
  }
  return (
    <>
    <input
              onChange={(e) => {
                searchCorse(e);
              }}
            />

            <button onClick={()=>{carshed()}}>serch</button>
    <div className="ffff">
      {corses1.map((element, index) => {
        return (
          <div ><br/>
            <h1>{element.name}</h1>
            <img className="imgSize" src={element.imgUrl}/>
                  <h4>{element.time}</h4>
                  <button onClick={()=>{changePage(element.id)}} key={index}>submit </button>
          </div>

        );
      })}{" "}
    </div>
 </> );
}
