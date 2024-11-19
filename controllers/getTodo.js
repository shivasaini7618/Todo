const Todo = require('../models/todoModel');

exports.getTodo = async(req , res)=>{
 try{
  const response = await Todo.find();
  console.log('fetch successfull');
  res.status(200).json({
    success:true,
    data:response,
    msg:'fetch successfully'
  });

 }catch(err){
  console.error(err);
  console.log(err);
  res.status(500).json('Interal server error')
 }
};

exports.getTodoById = async (req , res)=>{
  try{
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if(!todo){ return res.status(404).json('Not found') };

    res.status(200).json({
      success:true,
      data:todo,
      msg:"Fetch successfull"
    });

  }catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json('Interal server error')
  }
}