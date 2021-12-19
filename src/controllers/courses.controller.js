const express = require("express");

const Courses = require("../models/courses.model");

const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("course_images"), async (req, res) => {
  try {
    const course = await Courses.create({
      title: req.body.title,

      instructor_id: req.body.instructor_id,

      head_img: req.file.path,
      lecture_ids: req.body.lecture_ids,
      description: req.body.description,
    });

    console.log(course);
    return res.status(201).send(course);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await Courses.find()
      .populate("instructor_id")
      .populate("lecture_ids")
      .lean()
      .exec();

    console.log(courses);
    return res.status(201).send(courses);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
