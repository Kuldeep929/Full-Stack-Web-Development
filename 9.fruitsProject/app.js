const mongoose = require('mongoose');
mongoose .connect("mongodb://localhost:27017/fruitsDB" ,  { useUnifiedTopology: true , useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true , 'No fruit name specified.']
  },
  rating : {
    type : Number,
    min : 1,
    max : 10
  },
  review : String
});

const Fruit = new mongoose.model("Fruit" , fruitSchema);

const pineapple = new Fruit ({
  name : "Pineapple",
  rating : 10,
  review : "I am loving it."
});
// pineapple.save();

const kiwi = new Fruit({
  name : "kiwi",
  rating : 10,
  review : "I am loving it."
});
// const orange = new Fruit({
//   name : "Orange",
//   rating : 5,
//   review : "I am loving it."
// });
//
// const banana = new Fruit({
//   name : "Banana",
//   rating : 7,
//   review : "I am loving it."
// });

// Fruit.insertMany([kiwi,orange,banana] , function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Inserted Successfully.");
//   }
// });




 Fruit.find(function(err,fruits){
   if(err){
     console.log(err);
   }else{
     fruits.forEach(function(fruit){
       console.log(fruit.name);
     });
   }
 });
 // Fruit.deleteOne({_id : "5f3392cce3f69439ec14b107"},function(err){
 //   if(err){
 //     console.log(err);
 //   }else{
 //     console.log("deleted Successfully.");
 //   }
 // });



const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favFruit : fruitSchema
});

const Person = new mongoose.model("Person" , personSchema);
const person = new Person({
  name : "Kuldeep",
  age : 19,
  favFruit : pineapple
});

Person.updateOne({_id : "5f338d2bc4535b10fc21dd56"}, {favFruit : kiwi},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Updated Successfully.");
  }
});

// person.save();
