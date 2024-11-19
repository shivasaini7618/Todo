const Todo  = require('../models/todoModel');

exports.deleteTodo = async(req , res) =>{
  try{
    const {id} = req.params.id;
  await Todo.findByIdAndDelete(id);
  
  res.status(200).json('Deleted sucessfull');
  console.log('Deleted successfull');
  }catch(err){
    console.log(err);
    console.error(err);
    res.status(500).json('Internal server error');
  }
}