const express = require("express");

const Instructor = require("../models/instructor.model");

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/",async (req, res) => {
  try {
    const instructor = await Instructor.create({
      name: req.body.name,
      img: req.body.img,
      speciality: req.body.speciality,
      about: req.body.about,
    });

    console.log(instructor);
    return res.status(201).send(instructor);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const instructors = await Instructor.find().lean().exec();

    console.log(instructors);
    return res.status(201).send(instructors);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
