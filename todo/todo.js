let todos = []; 

// Functions for Todo List 1
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        todos.push(taskText);
        console.log("Updated Todo List 1 Array:", todos);
        todoInput.value = "";
    }
}

function delTodo() {
    const todoInput = document.getElementById('todo-input');
    const taskText = todoInput.value.trim();
    const index = todos.indexOf(taskText);

    if (index > -1) {
        todos.splice(index, 1);
        console.log("Updated Todo List 1 Array:", todos);
        todoInput.value = "";
    }
}

// Functions for Todo List 2
function addTodo2() {
    const input = document.getElementById('todo-input2');
    const ul = document.querySelector("#todo-list");
    const taskText = input.value.trim();

    if (taskText !== "") {
        let para = document.createElement("p");
        para.innerHTML = `${taskText} <button onclick='del(event)'>delete</button>`;
        ul.appendChild(para);
        input.value = "";
    }
}

// Universal delete function
function del(e) {
    e.target.parentNode.remove();
}

// Functions for Todo List 3
function addTodo3() {
    const input = document.getElementById('todo-input3');
    const dateInput = document.getElementById('date-input');
    const todoListDiv = document.getElementById('todo-list3');
    const taskText = input.value.trim();
    const dateText = dateInput.value;

    if (taskText !== "" && dateText !== "") {
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item-grid');

        todoItem.innerHTML = `<p>${taskText}</p><p>${dateText}</p><button class="del-btn" onclick='del(event)'>delete</button>`;

        todoListDiv.appendChild(todoItem);

        input.value = "";
        dateInput.value = "";
    }
}