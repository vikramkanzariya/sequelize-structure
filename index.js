const express = require('express');
require('./models/index');
// let { addUser } = require('./controllers/userController')
const { addUser , 
  getUsers , getUser,
  createUser ,
} = require('./controllers/userController')

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/" , (req , res) => {
  res.send("Hello World")
});

app.get("/add" , addUser);

app.get("/users" , getUsers);
app.get("/users/:id" , getUser);

app.post("/users" , createUser);


app.listen(port , () => {
  console.log(`Working on Port: ${port}`);
})