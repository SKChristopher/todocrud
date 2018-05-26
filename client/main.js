console.log("connected");

const futureTodo = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const todoList = document.getElementById('todo-list');

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("todo-form submit");
  eventController.addTodo(futureTodo.value);
  form.reset();
});


const eventController = {
    getTodo: () => {
        fetch("/todo")
        .then(res => res.json())
        .then((todos) => {
            todoList.innerHTML = todos.map(todo => `<li>${todo.item}<button onclick='eventController.deleteTodo(event)' class='delete' id=${todo._id}>Delete🐒</button></li>`).join('');
        })
        .catch(err => {
            throw err;
        });
    },
    
    addTodo: todo => {
        fetch("/todo", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ todo })
        })
        .then(res => res.json())
        .then(() => eventController.getTodo())
        .catch(err => {
            throw err;
        });
    },

    deleteTodo: (event) => {
        const id = event.target.id;
        fetch(`/todo/${id}`, {
            method: 'DELETE',
        }).then(eventController.getTodo());
    }
};

window.onload = eventController.getTodo;
