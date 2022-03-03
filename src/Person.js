const mongoose = require('mongoose');
let  PersonSchema = new mongoose.Schema({
    name: {type:String,required:true},
    age: Number,
    favoriteFoods: Array
  })
  
  module.exports =PersonModel= mongoose.model('user', PersonSchema)
  