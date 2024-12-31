import { addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders, tasks } from './taskManager.js';

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const title = document.getElementById("title").value;
    const dueTime = parseInt(document.getElementById("dueTime").value, 10);
    const priority = document.getElementById("priority").value;

    const newTask = { title, dueTime, priority };
    
    addTask(newTask); 
    displayTasks(); 
    scheduleReminders(); 
});

sortTasksByPriority();

function displayTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.title} (Due in ${task.dueTime} minutes) - Priority: ${task.priority}`;
        taskListElement.appendChild(taskElement);
    });
}

document.getElementById("filterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const filterTime = parseInt(document.getElementById("filterTime").value, 10);
    const dueTasks = getTasksDueWithin(filterTime);
    
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = ''; 
    dueTasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.title} (Due in ${task.dueTime} minutes) - Priority: ${task.priority}`;
        taskListElement.appendChild(taskElement);
    });
});

displayTasks(); 