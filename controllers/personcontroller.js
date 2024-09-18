const persons = require('../persons.json')
function getAllPersons(req,res){
  try{
      res.json(persons);
  }catch(err){
     console.log('err');
  }
}

function getPerson(req,res){
  try{
     let id = parseInt(req.params.id);
     let person = persons.find((person)=> person.id === id);
     res.json(person);
  }catch(err){
    console.log(err);
  }
}
module.exports = {
  getAllPersons,
  getPerson
}