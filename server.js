const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');

mongoose.connect('mongodb://todoer:123@ds016298.mlab.com:16298/crudtodo', console.log('Connected to mLabs'));

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/todo', todoController.getTodo);
app.post('/todo', todoController.addTodo);
app.delete('/todo/:id', todoController.deleteTodo);

app.listen(PORT, console.log(`Listening on ${PORT}`));
