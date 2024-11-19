const Todo = require('../models/todoModel');

exports.updateTodo = async(req , res)=>{
  try{
    const {id }= req.params;
    const{title , description}= req.body;

    const todo = await Todo.findByIdAndUpdate(
      {_id:id} ,
      {title , description , updateAt:Date.now()},

      {new:true,
        runValidators:true
      }

    );

  if(!todo) { return res.status(403).json('Id not found')}

    res.status(200).json(todo);
  }catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json('Interal server error');
  }
}