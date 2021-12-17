const express = require("express");

const app = express()


const coursesController = require("./controllers/courses.controller")
const instructorController=require("./controllers/instructor.controller")
const lectureController=require("./controllers/lecture.controller")
const learnController=require("./controllers/learn.controller")
const {signup, signin} =require("./controllers/user.controller")

app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use("/courses", coursesController)
app.use("/instructors", instructorController)
app.use("/lectures", lectureController)
app.use("/learns", learnController)
app.post("/pricing", signup);
app.post("/login", signin);

app.use(express.static("public"));

app.set(" view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.get("/course",(req, res)=>{
    res.render("corecourse.ejs")
})

app.get("/learn",(req, res)=>{
    res.render("learn.ejs")
})

app.get("/pricing",(req, res)=>{
    res.render("pricing.ejs")
})

app.get("/login",(req, res)=>{
    res.render("login.ejs")
})

app.get("/workshop",(req, res)=>{
    res.render("workshops.ejs")
})

app.get("/account",(req, res)=>{
    res.render("account.ejs")
})
app.get("/subscription",(req, res)=>{
    res.render("subscription.ejs")
})
app.get("/payment",(req, res)=>{
    res.render("payment.ejs")
})
app.get("/invoice",(req, res)=>{
    res.render("invoices.ejs")
})
app.get("/lecture",(req, res)=>{
    res.render("lecture.ejs")
})

module.exports = app