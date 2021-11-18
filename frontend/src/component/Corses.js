import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Corses() {
  const [corses1, setCorses1] = useState([]);
  const [newCorses, setNewCorses] = useState("");
  const [params, setParams] = useState("");
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/courses");
    console.log(res.data);
    setCorses1(res.data);
  }, []);

  const searchCorse = (e) => {
    setNewCorses(e.target.value);
  };

  const carshed = async () => {
    console.log(newCorses);
    const res = await axios.get(`http://localhost:5000/serch/${newCorses}`);
    setCorses1(res.data);
  };

  const history = useHistory();

  const changePage = (id) => {
    history.push(`/Corse/${id}`);
  };
  const DoLike = async (id) => {
    const like = await axios.put(`http://localhost:5000/like/${id}`);
    console.log(like.data);
    setCorses1(like.data);
   
  };

  return (
    <>
      <input onChange={(e) => { searchCorse(e); }}
      />

      <button
        onClick={() => {
          carshed();
        }}
      >
        🔍
      </button>
      <div className="ffff">
        {corses1.map((element, index) => {
          return (
            <div>
              <br />
              <h1>{element.name}</h1> 
              <img className="imgSize" src={element.imgUrl} />
              <h4>{element.time}</h4>
              <button
                onClick={() => {
                  changePage(element.id);
                }}
                key={index}
              >
                submit{" "}
              </button>{" "}
              <br />
              <br />
              {element.like === false ? (
                <button
                  onClick={() => {
                    DoLike(element.id);
                  }}
                >
                  🤍
                </button>
              ) : (
                <button
                  onClick={() => {
                    DoLike(element.id);
                  }}
                >
                  ❤️
                </button>
              )}
            </div>
          );
        })}{" "}
      </div>
    </>
  );
}
