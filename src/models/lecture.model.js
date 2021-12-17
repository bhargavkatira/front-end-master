const mongoose = require("mongoose")

const lectureSchema = mongoose.Schema({

    title : {type: String, required:true},
    content : {type: String, required: true},
    img: {type: String, required: true}
},
{
    versionKey : false,
    timesyamps: true
});

module.exports = mongoose.model("lecture", lectureSchema)





