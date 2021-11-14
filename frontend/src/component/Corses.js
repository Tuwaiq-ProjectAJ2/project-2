import React, {useState,useEffect} from'react'
import axios from "axios";
export default function Corses() {
const [corses1, setCorses1] = useState([])
const [newCorses, setNewCorses] = useState("")




    return (

        <div>
            <div> JavaSicript </div><br/>

            <div> Java </div><br/>

             <div>Python </div><br/>

             <div>C++</div><br/>

             <div>C#</div><br/>

             <div>Swift</div><br/>

             <div>HP</div><br/>

        </div>
    )
}
