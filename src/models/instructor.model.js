const mongoose = require("mongoose")

const instructorSchema = mongoose.Schema({

    name : {type: String, required:true},
    speciality : {type: String, required: true},
    about : {type: String, required: true},
    img: {type: String, required: true}
},
{
    versionKey : false,
    timesyamps: true
});


module.exports = mongoose.model("instructor", instructorSchema)





