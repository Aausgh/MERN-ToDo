const express = require('express');
const Todo = require('../models/todoModel');

const router = express.Router();

//Get all tasks
router.get('/', (req, res) => { 
      res.json({msg: 'Get all tasks'});
})

//Get a single task
router.get('/:id', (req, res) => {
      res.json({msg: 'Get a single task'});
})


//Post a new task
router.post('/', async (req, res) => { 
      const { title, task } = req.body
      
      try {
            const todo = await Todo.create({ title, task })
            res.status(200).json(todo)
      } catch (error) { 
            res.status(400).json({ error: error.message })
      }
})


//Delete a task
router.delete('/:id', (req, res) => { 
      res.json({msg: 'Delete a task'});
})

//Update a task
router.patch('/:id', (req, res) => {
      res.json({msg: 'Update a task'});
})

module.exports = router;