import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Corses from "./Corses";

export default function Corse() {
  const { id } = useParams(); //.id
  const [corseList, setCorseList] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`http://localhost:5000/course/${id}`);
    console.log(result.data, "hhhhhhh");
    setCorseList(result.data);
  }, []);

  return (
    corseList.length ?
    <div>
      
      
      {}
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${corseList[0].vedId}`}
      ></iframe>
    </div>:""
  );
}
