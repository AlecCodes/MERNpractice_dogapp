const mongoose = require("./connection");

const dogSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
})

const Dog = mongoose.model("dog", dogSchema);

module.exports = Dog