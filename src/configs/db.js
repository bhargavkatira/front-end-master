const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivam:shivam@cluster0.8iyo3.mongodb.net/Users") 
}