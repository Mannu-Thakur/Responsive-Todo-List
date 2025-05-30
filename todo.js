const inputField = document.getElementById('say');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const editButton = document.getElementById('editButton');
const markButton = document.getElementById('markButton');
const doneButton = document.getElementById('doneButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const task = inputField.value.trim();
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.addEventListener('click', () => {
            const tasks = document.querySelectorAll('li');
            tasks.forEach(t => t.classList.remove('selected'));
            listItem.classList.add('selected');
        });
        todoList.appendChild(listItem);
        inputField.value = '';
    }
});

deleteButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
});

editButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        inputField.value = selectedTask.textContent;
        selectedTask.remove();
    }
});

markButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        selectedTask.classList.add('completed');
    }
});

doneButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        selectedTask.classList.remove('completed');
    }
});
