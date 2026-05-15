const express = require('express');

const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {

  const tasks = await Task.find();

  res.json(tasks);

});

router.post('/', async (req, res) => {

  const task = new Task({
    title: req.body.title
  });

  await task.save();

  res.json(task);

});

router.delete('/:id', async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: 'Task Deleted'
  });

});

module.exports = router;
