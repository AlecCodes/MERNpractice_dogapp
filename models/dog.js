const mongoose = require("./connection");

const dogSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    picture: String
})

const Dog = mongoose.model("dog", dogSchema);

module.exports = Dog