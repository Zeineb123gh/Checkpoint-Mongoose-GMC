const mongoose = require("mongoose");
const { Schema } = mongoose;

const Person = new Schema({
  Name: {
    type: String,
    require: true,
  },
  Age: Number,
  favoriteFoods: [String],
});

module.exports = Contact = mongoose.model("person", Person);
