const mongoose = require("mongoose")

module.exports = () => {

    return mongoose.connect("mongodb+srv://swarnika:swarnika@cluster0.8iyo3.mongodb.net/test")
}




