// Storage: TODO: {id,title,status:'active'|'completed'}
class Storage{
    constructor(storage) {
        this.storage = storage;
    }
    setItems(items){

        localStorage.setItem(this.storage, JSON.stringify(items));
    }
    getItems(){
        return JSON.parse(localStorage.getItem(this.storage)) ?? [];
    }
}
const storage = new Storage('todos');

let todos = [];

window.addEventListener("DOMContentLoaded", ()=>{
    todos = storage.getItems();
    render();
    updateCount();
});

const todoList = document.querySelector('.todos ul');

function updateCount() {
    document.querySelector('.count span').innerText = numberOfTodos();
    document.querySelector('.mob-count span').innerText = numberOfTodos();
}

//const numberOfTodos = () => todos.filter(todo=> todo.status === 'active').length;

const numberOfTodos = () => {
    const activeTodos = todos.filter(todo => todo.status === 'active');
    return activeTodos.length;
  };
  


function createTodo(title){
    const todo = {id: (todos.length + 1),title, status: 'active'};
    todos.push(todo);
    storage.setItems(todos)
    render();
    return todo;
}

function removeTodo(id){
    todos = todos.filter(todo => todo.id !== Number(id));
    storage.setItems(todos)
    render();
}

function changeStatus(id, status){
    todos = todos.map(todo => {
        if(todo.id === Number(id)){
            return {...todo, status}
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createElement(element){
    return document.createElement(element);
}

function createTodoElement(todo){
    const container = createElement('li');
    container.setAttribute('data-id', todo.id)
    const label = createElement('label');
    label.classList.add('list');

    const checkbox = createElement('input');
    checkbox.setAttribute('data-id', todo.id)
    checkbox.type = 'checkbox';
    checkbox.checked = todo.status === 'completed';
    checkbox.addEventListener('change', evt => {
        const id = evt.target.getAttribute('data-id');
        const todo = todos.filter(todo => todo.id === Number(id))[0];
        changeStatus(id, (todo.status === 'completed') ? 'active' : 'completed');
        updateCount();
    });


    const spanText = createElement('span');
    spanText.classList.add('text');
    spanText.innerText = todo.title;
    const spanRemove = createElement('span');
    spanRemove.classList.add('remove')

    // build up UI
    label.append(checkbox);
    label.append(spanText);
    container.append(label);
    container.append(spanRemove);

    return container;
}

function render(){
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.append(createTodoElement(todo))
    });
}






















