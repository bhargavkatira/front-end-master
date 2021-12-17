const express = require("express")

const Lecture = require("../models/lecture.model");

const upload = require("../middlewares/upload");

const router = express.Router()


router.post("/", upload.single("lect_images"),async (req, res) => {
   

    try{

        const lecture = await Lecture.create({

            title: req.body.title,
            content: req.body.content,
            img : req.file.path
            
            
        });

        console.log(lecture)      
        return res.status(201).send(lecture)
    }
    catch(e){

        return res.status(500).json({status: "failed", message: e.message})

    }
})



router.get("/",async (req, res) => {
   

    try{

        const lecture = await Lecture.find().lean().exec()

        console.log(lecture)      
        return res.status(201).send(lecture)
    }
    catch(e){

        return res.status(500).json({status: "failed", message: e.message})

    }
})




module.exports = router