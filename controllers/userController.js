const { where } = require("sequelize");
const db = require("../models/index");

const User = db.user;

const addUser = async (req, res) => {
  // const jane = User.build({
  //   firstName: "Bhavesh",
  //   lastName: "Rathod",
  // });
  // console.log(jane instanceof User); // true
  // console.log(jane.firstName); // "Jane"

  // await jane.save();
  // console.log("Bhavesh was saved to the database!");
  // console.log(jane.toJSON());

  // res.status(200).json(jane.toJSON());

  let userData = await User.create({ firstName:"Vikram" , lastName:"Kanzariya" });

  // await userData.update({ firstName:"Hardev" , lastName:"zala"});
  console.log(userData);
  return res.json({ data:userData })
};


// Read Data
const getUsers = async(req , res) => {
  let users = await User.findAll();
  res.json({ data:users })
}

const getUser = async(req , res) => {
  let users = await User.findOne({
    where:{ id: req.params.id }
  });
  res.json({ data:users })
}

const createUser = async(req , res) => {
  const postData = req.body;
  
  const users = await User.create({ postData })

  return res.status(200).json({
    success:true,
    message:"User Created...",
    data:users,
  });
}

module.exports = { 
  addUser , 
  getUsers , getUser,
  createUser
 };
