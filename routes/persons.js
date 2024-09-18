const express = require('express');
const personcontroller = require('../controllers/personcontroller');
const router = express.Router();

router.get('/persons',(req,res)=>{
  personcontroller.getAllPersons(req,res);
})
router.get('/person/:id',(req,res)=>{
  personcontroller.getPerson(req,res);
})
module.exports = router;