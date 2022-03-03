const PersonModel=require('./Person.js')


const Person=require('./Person.js')
console.log(PersonModel)
  const addPerson =()=>{
    const person=new PersonModel({
      name:'Tomas',
      age:45,
      favoriteFoods:['Fish','Salade','potato']
  })
  person.save()
     .then (doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })

  } // add person in DB


  const createAndSavePerson=async()=>{
    try{

      const arrayOfPeople=[{ name: 'Will Riker', age:25, favoriteFoods:['bread','Salade','potato'] },
   { name: 'Mary', age:60, favoriteFoods:['chiken','pizza'] },
   { name: 'cillian Murphy', age:30, favoriteFoods:['meat','rice','tomato'] },
   { name: 'Mary', age:4, favoriteFoods:['coscoss','Brik'] }];
    
    Person.create(arrayOfPeople,(err,data)=>{
      if (err) return [err];
      return [null,data];
    });
}
catch(err ) {
  console.error(err);
}

}// insert many person in DB


const findAllPeople=async()=>{
  try{
    const result=await Person.find({ name: 'Will Riker', age: { $gte: 18 } }).exec();
    console.log(result)
  }
  catch(err ) {
    console.error(err);
  }
}// find all people from DB

const findOnePeople=async()=>{
  try{
const result= await Person.findOne({ favoriteFoods: 'chiken' }).exec();
console.log(result);
  }
  catch(err ) {
    console.error(err);
  }
}// find one person from DB


const findPeopleId=async()=>{
  try{
const result= await Person.findById("621f58bc0f296a14b1e47dd7").exec();
console.log(result);
  }
  catch(err ) {
    console.error(err);
  }
} //find a unique person from DB


const findAndUpdate=async()=>{
  try{
const updatePerson= await Person.findById("621fd1d49f6ec049bd369bbb");
updatePerson.age=18
await updatePerson.save()
console.log(updatePerson);
  }
  catch(err ) {
    console.error(err);
  }
} //find person from DB and update 

const findOneAndUpdat=async()=>{
  try{
const updateOnePerson= await Person.findOneAndUpdate({ name: 'Geordi LaForge'},{$set:{age:20}},{ new: true });

await updateOnePerson.save()
console.log(updateOnePerson);
  }
  catch(err ) {
    console.error(err);
  }
}
const findDocAndRemove=async()=>{
  try{
const removeOnePerson= await Person.findByIdAndRemove("621fd1d49f6ec049bd369bb9");

console.log(removeOnePerson);
  }
  catch(err ) {
    console.error(err);
  }
} 

const removeManyPeople=()=>{
  
 Person.remove({name:'Mary'},(err,data)=>
err? console.log(err):console.log(data)
 );
}
 
 
module.exports={addPerson,createAndSavePerson,findAllPeople,findOnePeople,findPeopleId,findAndUpdate,findOneAndUpdat,findDocAndRemove,removeManyPeople}
