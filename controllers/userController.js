// controllers/userController.js
const userModel = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  // Logic to fetch all users
  res.send("Get all users");
};

exports.createUser = (req, res) => {
  // Logic to create a new user
  res.send("Create a user");
};
