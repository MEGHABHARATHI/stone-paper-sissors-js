const addtodobtn=document.getElementById("addTodoBtn")
const todoinput=document.getElementById("todoInput")
const todoListUl = document.getElementById("todoList")

let todotext;
let todos=[];
let todosString=localStorage.getItem("todos");

if(todosString){
    todos=JSON.parse(todosString);
}

const populateTodos=()=>{ 
    let string ="";
    for(const todo of todos){
        string+=`<li class="todo-item ${todo.isCompleted ? 'completed' : ''}">
                    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? 'checked' : ''}>
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                 </li>`
    }
    todoListUl.innerHTML=string;
}

addtodobtn.addEventListener("click",()=>{
    console.log("Button Clicked");
    todotext=todoinput.value;
    
    console.log(todotext);
    todoinput.value="";
    let todo={
        title:todotext,
        isCompleted: false
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(todos);
})

// todocheckbox.forEac h

populateTodos();