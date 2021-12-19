const express = require('express')

const User = require("../models/user.model")

const router = express.Router()

//------------------------USER CRUD ------------------------------

router.post("", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      res.status(201).send(user);
    } catch (e) {
      res.status(500).json({ status: e.message });
    }
  });

  router.post('/:email', async (req, res) => {
    try {
      let user = await User.findOne({ email: req.params.email});
       // if user does not exist, then throw an error
  
      if (!user) {
        res
          .status(400)
          .json({
            status: "Failed",
            message: "Please provide correct email address and password.",
          });
      }
  
      // else we match the password
  
      const match = await user.checkPassword(req.body.password);
      // if it does not match then throw an error
  
      if (!match) {
        res
          .status(400)
          .json({
            status: "Failed",
            message: "Please provide correct email address and password.",
          });
      }
      
      return res.send({ user });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  })
  
  router.get("/:email", async (req, res) => {
    try {
      const user = await User.findOne({email:req.params.email}).lean().exec();

      return res.send({ user });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:email", async (req, res) => {
    try {
      const user = await User.findOneAndUpdate({email:req.params.email}, req.body, {
        new: true,
      });
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  module.exports = router;

