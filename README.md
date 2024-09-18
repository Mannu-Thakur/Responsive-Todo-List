# Responsive-Todo-List

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
            listItem.classList.toggle('completed');
        });
        todoList.appendChild(listItem);
        inputField.value = '';
    }
});

deleteButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        todoList.removeChild(task);
    });
});

editButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        inputField.value = selectedTask.textContent;
        todoList.removeChild(selectedTask);
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

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const tasks = document.querySelectorAll('li');
        tasks.forEach(task => task.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

document.styleSheets[0].insertRule('.completed { text-decoration: line-through; color: grey; }');
document.styleSheets[0].insertRule('.selected { background-color: rgba(0, 0, 0, 0.1); }');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ffffff;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.heading {
    text-align: center;
    margin-bottom: 20px;
    color: hsl(146, 81%, 44%);
}

.list {
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 30px rgba(116, 7, 7, 0.9);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    background-color: #333333;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: larger;
}

button {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    font-size: 1rem;
    cursor: pointer;
    color: #ffffff;
    border: none;
    border-radius: 5px;
}

#addButton {
    background-color: hsl(120, 50%, 40%);
}

#deleteButton {
    background-color: hsl(0, 70%, 50%);
}

#editButton {
    background-color: hsl(30, 60%, 40%);
}

#markButton {
    background-color: hsl(200, 60%, 50%);
}

#doneButton {
    background-color: hsl(90, 60%, 50%);
}

@media (max-width: 500px) {
    .list {
        padding: 10px;
        max-width: 90%;
    }

    button {
        font-size: 0.9rem;
    }
}
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
            listItem.classList.toggle('completed');
        });
        todoList.appendChild(listItem);
        inputField.value = '';
    }
});

deleteButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        todoList.removeChild(task);
    });
});

editButton.addEventListener('click', () => {
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        inputField.value = selectedTask.textContent;
        todoList.removeChild(selectedTask);
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

todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const tasks = document.querySelectorAll('li');
        tasks.forEach(task => task.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

document.styleSheets[0].insertRule('.completed { text-decoration: line-through; color: grey; }');
document.styleSheets[0].insertRule('.selected { background-color: rgba(0, 0, 0, 0.1); }');
