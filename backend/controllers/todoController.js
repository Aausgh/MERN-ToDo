const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

//get all tasks
const getTasks = async (req, res, next) => { 
      const todo = await Todo.find({}).sort({ createdAt: -1 })
      res.status(200).json(todo)
}


//get a single task
const getTask = async (req, res) => { 
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such task'})
      }
      
      const todo = await Todo.findById(id)

      if (!todo) {
            return res.status(400).json({error: 'Task not found'})
      }

      res.status(200).json(todo)
}



//create a new task
const createTask = async(req, res) => {
      const { title, task, date } = req.body
      
      //add doc to db
      try {
            const todo = await Todo.create({ title, task, date })
            res.status(200).json(todo)
      } catch (error) { 
            res.status(400).json({ error: error.message })
      }
}


//delete a task
const deleteTask = async (req, res) => { 
      const { id } = req.params
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such task'})
      }

      const todo = await Todo.findOneAndDelete({ _id: id })
      
      if (!todo) {
            return res.status(400).json({error: 'Task not found'})
      }

      res.status(200).json(todo)

}


//update a task
const updateTask = async (req, res) => { 
      const { id } = req.params
      
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such task'})
      }

      const todo = await Todo.findOneAndUpdate({ _id: id }, {
            ...req.body
      })

      if (!todo) {
            return res.status(400).json({error: 'Task not found'})
      }

      res.status(200).json(todo)

}


module.exports = {
      getTasks,
      getTask,
      createTask,
      deleteTask,
      updateTask
}