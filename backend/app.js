const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const Corses = [
  {id:1, name: "javaSicript",time:"120 day"},
  {id:2, name: "Java",time:"120 day"},
  {id:3, name: "Python",time:"120 day"},
  {id:4, name: "C++",time:"120 day"},
  {id:5, name: "C#",time:"120 day"},
  {id:6, name: "Swift",time:"120 day"},
  {id:7, name: "PHP",time:"120 day"},
  {id:8, name: "Kotlin",time:"120 day"},
];

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
// app.get("/employees/salary", (req, res) => {
//   const employee = [];
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
