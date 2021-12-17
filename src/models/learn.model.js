const mongoose = require("mongoose")


            
const learnSchema = mongoose.Schema({

    level : {type: String, required:true},
    course_ids : [{type: mongoose.Schema.Types.ObjectId, 
        ref:"course",
        required: true}],
    title:  {type: String, required: true},  
    description : {type: String, required: true},

},
{
    versionKey : false,
    timesyamps: true
});


module.exports = mongoose.model("learn", learnSchema)

