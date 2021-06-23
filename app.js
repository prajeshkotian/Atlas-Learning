document.querySelector('form').addEventListener('submit', handleSubmitForm);


function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}



function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('movie-list-item');
    ul.appendChild(li);
}