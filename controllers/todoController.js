const Todo = require("../models/todo");

const todoController = {
  getTodo: (req, res) => {
    Todo.find({}, (err, foundTodos) => {
      if (err) res.status(500).send(err);
      res.json(foundTodos);
    });
  },
  addTodo: (req, res) => {
    Todo.create({ item: req.body.todo }, (err, todo) => {
      if (err) res.status(500).send(err);
      res.json(todo);
    });
  },
  deleteTodo: (req, res) => {
    Todo.deleteOne({ _id: req.params.id }, (err, todo) => {
      if (err) res.status(500).send(err);
      res.json(todo);
    });
  }
};

module.exports = todoController;
