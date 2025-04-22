const submit = document.getElementById('submit');
const addTask = document.getElementById('addTask');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

const tasks = [];

submit.addEventListener('click', () => {
    const taskValue = addTask.value.trim();
    if (taskValue !== '') {
        const taskId = tasks.length;
        tasks.push(taskValue);

        const li = document.createElement('li');
        li.dataset.id = taskId;

        const button = document.createElement('button');
        button.textContent = taskValue;
        button.addEventListener('click', () => completeTask(taskId, li));

        li.appendChild(button);
        todoList.appendChild(li);

        addTask.value = '';
    }
});

function completeTask(id, taskElement) {
    const completedTask = tasks[id];
    
    const li = document.createElement('li');
    li.textContent = completedTask;

    doneList.appendChild(li);
    taskElement.remove();
}
