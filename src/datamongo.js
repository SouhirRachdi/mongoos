const mongoose = require('mongoose');
const {addPerson,createAndSavePerson,findAllPeople,findOnePeople,findPeopleId,findAndUpdate,findOneAndUpdat,findDocAndRemove,removeManyPeople} =require('./model')


require("dotenv").config()
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI).then (() => {
  console.log('db connected')
})
.catch(err => {
  console.error(err)
}); 

  //addPerson()
 //createAndSavePerson()
  //findAllPeople()
  //findOnePeople()
 //findPeopleId()
 //findAndUpdate()
 //findOneAndUpdat()
 //findDocAndRemove()
 //removeManyPeople()
 