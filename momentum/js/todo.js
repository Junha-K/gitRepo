const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item)=> !(item.id === parseInt(li.id)));
    saveToDos(toDos);
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = "🗑️"
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    toDoInput.value = '';
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
    
}
