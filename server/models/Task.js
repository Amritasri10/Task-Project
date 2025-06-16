const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
status: {
  type: String,
  enum: ['pending', 'in progress', 'completed'],
  default: 'pending',
}

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;