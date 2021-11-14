import React, {useState,useEffect} from'react'
import axios from "axios";
export default function Corses() {
const [corses1, setCorses1] = useState([])
const [newCorses, setNewCorses] = useState("")


useEffect(async() => {
  const res  = await axios.get("http://localhost:5000/courses")
  console.log(res.data);
  setCorses1(res.data)
    
}, [])

    return (
        
 <div>
           
            {corses1.map((element,index)=>{
            return (
              <div key={index}>
                <h1>{corses1.name}</h1> 
        </div>
    )})} </div>
            )
}