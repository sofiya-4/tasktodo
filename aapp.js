document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;
    const status = document.getElementById('status').value;

    if (title && description && dueDate && priority && category && status) {
        const task = {
            title,
            description,
            dueDate,
            priority,
            category,
            status
        };

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        loadTasks();
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-description">${task.description}</div>
            <div class="task-due-date">Due Date: ${task.dueDate}</div>
            <div>Priority: ${task.priority}</div>
            <div>Category: ${task.category}</div>
            <div>Status: ${task.status}</div>
        `;
        taskList.appendChild(taskDiv);
    });
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = 'personal';
    document.getElementById('status').value = 'new';
}
