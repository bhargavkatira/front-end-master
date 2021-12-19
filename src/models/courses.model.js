const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({

    title : {type: String, required:true},
    instructor_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'instructor',
        required: true},
    
    head_img: {type:String, required: true},
    lecture_ids : [{type: mongoose.Schema.Types.ObjectId, 
        ref:"lecture",
        required: true}],
    description : {type: String, required: true},

},
{
    versionKey : false,
    timesyamps: true
});


module.exports = mongoose.model("course", courseSchema)

