const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.set(" view engine", "ejs");

app.listen(3000, function(){
    
    console.log("listening on port 3000");
})

app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.get("/course",(req, res)=>{
    res.render("corecourse.ejs")
})

app.get("/learn",(req, res)=>{
    res.render("learn.ejs")
})

app.get("/price",(req, res)=>{
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









