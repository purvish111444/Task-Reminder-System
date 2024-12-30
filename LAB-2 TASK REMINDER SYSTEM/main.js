import { addTask, sortTasks, getTasksDueSoon, sendReminders } from './taskManager.js';

const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');

let tasks = [];

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const dueTime = parseInt(document.getElementById('dueTime').value);
  const priority = document.getElementById('priority').value;

  try {
    const task = addTask(tasks, { title, dueTime, priority });
    tasks = sortTasks(tasks);
    displayTasks(tasks);
    sendReminders(task);
  } catch (error) {
    alert(error.message);
  }
});

function displayTasks(tasks) {
  tasksContainer.innerHTML = '';
  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = `task ${task.priority.toLowerCase()}`;
    taskDiv.textContent = `${task.title} - Due in ${task.dueTime} minutes - Priority: ${task.priority}`;
    tasksContainer.appendChild(taskDiv);
  });
}
