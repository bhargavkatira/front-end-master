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
        res.status(400).send("error")
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      res.status(400).send("error");
    }

    return res.render("account.ejs");
  } catch (e) {
    return res.status(500).render("login.ejs");
  }
};

module.exports = { signup, signin };
