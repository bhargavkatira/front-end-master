require("dotenv").config();

const User = require("../models/user.model");

const signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if it already exists, then throw an error

    if (user) {
      res.status(400).json({
        status: "Failed",
        message: "Please provide a different email address",
      });
    } else {
      const password = req.body.password;
      const cpassword = req.body.confirmpassword;
      if (password === cpassword) {
        user = await User.create({
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          username: req.body.username,
          password: req.body.password,
          payment_option: req.body.payment_option,
          payment_detail: req.body.payment_detail,
        });

        return res.render("login.ejs");
      }
    }
  } catch (e) {
    return res.render("index.ejs");
  }
};

const signin = async (req, res) => {
    try {
    let user = await User.findOne({ email: req.body.email });
  
    if (!user) {
        res.status(400).send("User not registered");
    }
  
    const match = await user.checkPassword(req.body.password);
  
    if (!match) {
      res.status(400).send("Invalid Credentials");
    }
  
    //   if (localStorage.getItem("frontend_user") === null) {
    //   console.log(1)
    //   localStorage.setItem("frontend_user", JSON.stringify([]));
    //   } else {
    //   console.log(2)
    //   let arr = JSON.parse(localStorage.getItem("frontend_user"));
    //   arr.push(user);
    //   localStorage.setItem("frontend_user", JSON.stringify(arr));
    //   }
     
    console.log(user)
    return res.render("account.ejs");
  
  } catch (e) {
    return res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};

module.exports = { signup, signin };
