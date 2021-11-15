const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const Corses = [
  {id:1, name: "javaSicript",time:"6 months",imgUrl:""},
  {id:2, name: "Java",time:"6 months",imgUrl:"https://i.pinimg.com/236x/50/23/24/5023241ec4e865874d1bd61a991e38ce.jpg"},
  {id:3, name: "Python",time:"6 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRajrZX9dCV3_kYtnHkC3IQLuwqk-vKDILsw&usqp=CAU"},
  {id:4, name: "C++",time:"6 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNacCMtrLHtBX_RZBEhCOakxgMk3o0M1e1Q&usqp=CAU"},
  {id:5, name: "C#",time:"6 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pCiNHRHhP2TAwrpqK3dfRRRIXbvgpxGrIQ&usqp=CAU"},
  {id:6, name: "Swift",time:"6 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnqYewt-oWEd1KIEYZ2hGhcJdBX7rU9C5pA&usqp=CAU"},
  {id:7, name: "HTML",time:"3 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10vZo3toTsho4-pJ2ThB5746-1DojPkaYAQ&usqp=CAU"},
  {id:8, name: "PHP",time:"6 months",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hyuOQWZDMQDRkCHe9Z8WAgH7Ehwp6NwXLlrdLsuS4RjyKfxhAGRHBLZ_17Gm-c25BZc&usqp=CAU"},
  {id:9, name: "Kotlin",time:"6 months",imgUrl:"https://i.pinimg.com/236x/ac/0b/71/ac0b718d995deda3e1e4ee893501324d.jpg"},
];


app.get("/courses",(req,res)=>{
  res.status(200).json(Corses)
 })

  app.delete("/Corses1/:id", (req, res) => {
    const Corse = req.params.id;
     for (let i = 0; i <Corses.length; i++) {
       if (Corses[i].id === Corse) {
        Corses.splice(i, 1);
     }
    }

   res.status(200);
   res.json(Corses);
 });
  app.get("/serch/:name", (req, res) => {
    const searchField= req.params.name;
    let newArry  = Corses.filter((element,index) => {
      return element.name==searchField ;
    })
    res.status(200);
   res.json(newArry);
    
})









//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary >= 10000) {
//       employee.push(employees[i]);
//     }
//   }
//   res.status(200);
//   res.json(employee);
// });

// app.get("/", (req, res) => {
//   res.status(200);
//   res.json("hello app");
// });

// app.post("/employee", (req, res) => {
//   const { name, age, salary } = req.body;
//   employees.push({ name, age, salary });
//   res.status(200);
//   //get back to this
//   res.json({ name, age, salary });
// });

// app.get("/employees", (req, res) => {
//   res.status(200);
//   res.json(employees);
// });

const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});
