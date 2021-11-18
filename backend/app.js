const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const Corses = [
  {
    id: 1,
    name: "javaSicript",
    time: "6months",
    imgUrl:
      "https://www.worxs.net/wp-content/uploads/2017/10/javascript_logo.png",
    vedId: "1HakS7KsbCk",
    like: false,
  },
  {
    id: 2,
    name: "Java",
    time: "6 months",
    imgUrl:
      "https://i.pinimg.com/236x/50/23/24/5023241ec4e865874d1bd61a991e38ce.jpg",
    vedId: "2dZiMBwX_5Q",
    like: false,
  },
  {
    id: 3,
    name: "Python",
    time: "6 months",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRajrZX9dCV3_kYtnHkC3IQLuwqk-vKDILsw&usqp=CAU",
    vedId: "Y8Tko2YC5hA",
    like: false,
  },
  {
    id: 4,
    name: "C++",
    time: "6 months",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNacCMtrLHtBX_RZBEhCOakxgMk3o0M1e1Q&usqp=CAU",
    vedId: "OTroAxvRNbw",
    like: false,
  },
  {
    id: 5,
    name: "C#",
    time: "6 months",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pCiNHRHhP2TAwrpqK3dfRRRIXbvgpxGrIQ&usqp=CAU",
    vedId: "4vQJMyk2DPU",
    like: false,
  },
  {
    id: 6,
    name: "Swift",
    time: "3 months",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnqYewt-oWEd1KIEYZ2hGhcJdBX7rU9C5pA&usqp=CAU",
    vedId: "s_x49coTM4g",
    like: false,
  },
  {
    id: 7,
    name: "PHP",
    time: "6 months",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hyuOQWZDMQDRkCHe9Z8WAgH7Ehwp6NwXLlrdLsuS4RjyKfxhAGRHBLZ_17Gm-c25BZc&usqp=CAU",
    vedId: "GUsEJxOochU",
    like: false,
  },
  {
    id: 8,
    name: "Kotlin",
    time: "6 months",
    imgUrl:
      "https://i.pinimg.com/236x/ac/0b/71/ac0b718d995deda3e1e4ee893501324d.jpg",
    vedId: "HI6_f-BS2WE",
    like: false,
  },
  {
    id: 9,
    name: "HTML",
    time: "2 months",
    imgUrl:"https://i.pinimg.com/236x/03/66/f3/0366f339bc8102d0d4f82dd81de205ed.jpg",
    vedId: "r_Hjzk8ZFgU",
    like: false,
  },
];
//send arr to frotend
app.get("/courses", (req, res) => {
  res.status(200).json(Corses);
});
//Ved 
app.get("/course/:id", (req, res) => {
  const corsArr = [];
  const idCors = req.params.id;
   for (let j = 0; j < Corses.length; j++) {
     if (Corses[j].id == idCors) {
      corsArr.push(Corses[j]);
    }
  }

  res.status(200);
  res.json(corsArr);
});

app.get("/courses", (req, res) => {
  res.status(200).json(Corses);
});

// app.delete("/Corses1/:id", (req, res) => {
//   const Corse = req.params.id;
//   for (let i = 0; i < Corses.length; i++) {
//     if (Corses[i].id === Corse) {
//       Corses.splice(i, 1);
//     }
//   }

//   res.status(200);
//   res.json(Corses);
// });
app.get("/serch/:name", (req, res) => {
  const searchField = req.params.name;
  let newArry = Corses.filter((element, index) => {
    return element.name == searchField;
  });
  res.status(200);
  res.json(newArry);
});
const users = [
  { UserName: "jamelh", PassWord: "1234" },
  { UserName: "amjad", PassWord: "1998" },
  { UserName: "sara", PassWord: "13579" },
];
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  for (let i = 0; i < users.length; i++) {
    if (users[i].UserName === username && users[i].PassWord === password) {
      res.send("login correct");
    }
  }

  res.status(200);
  res.json("login failed");
});

app.put("/like/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < Corses.length; i++) {
    if (Corses[i].id == id) {
      if (Corses[i].like == false) {
        Corses[i].like = true;
      } else {
        Corses[i].like = false;
      }
    }
  }
  res.status(200);
  res.json(Corses);
});

const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});
