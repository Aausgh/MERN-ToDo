const express = require('express');

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
router.post('/', (req, res) => { 
      res.json({msg: 'Post a new task'});
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