const express = require("express");

const app = express()

const coursesController = require("./controllers/courses.controller")
const instructorController=require("./controllers/instructor.controller")
const lectureController=require("./controllers/lecture.controller")
const learnController=require("./controllers/learn.controller")

app.use(express.json())


app.use("/courses", coursesController)
app.use("/instructors", instructorController)
app.use("/lectures", lectureController)
app.use("/learns", learnController)

module.exports = app