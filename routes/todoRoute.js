const express = require('express');
const router = express.Router();

const {createTodo} = require('../controllers/createTodo');
const {getTodo , getTodoById}  = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');


router.post('/create' , createTodo);
router.get('/get' , getTodo);
router.get('/get/:id' , getTodoById);
router.put('/update/:id' ,updateTodo );
router.delete('/delete/:id' , deleteTodo);

module.exports = router;