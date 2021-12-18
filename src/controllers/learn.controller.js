const express = require("express")

const Learn = require("../models/learn.model");

const upload = require("../middlewares/upload");

const router = express.Router()

router.post("/",async (req, res) => {

    try{

        const learn = await Learn.create({

            level: req.body.level,
            
            description:req.body.description,
            
            course_ids : req.body.course_ids,
            title:req.body.title
           
        });

        console.log(learn)
        return res.status(201).send(learn)
    }
    catch(e){

        return res.status(500).json({status: "failed", message: e.message})

    }
})





router.get("/",async (req, res) => {
   

    try{

        const learn = await Learn.find().lean().exec()

        console.log(learn)      
        return res.render("learn.ejs",{learn,})
    }
    catch(e){

        return res.status(500).json({status: "failed", message: e.message})

    }
})




module.exports = router