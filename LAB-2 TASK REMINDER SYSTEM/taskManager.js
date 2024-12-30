export function addTask(tasks, task) {
    if (!task.title || typeof task.dueTime !== 'number' || !task.priority) {
      throw new Error('Invalid task data. Please fill all fields correctly.');
    }
  
    const newTask = { ...task, id: Date.now() };
    tasks.push(newTask);
    return newTask;
  }
  
  export function sortTasks(tasks) {
    return tasks.sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }
  
  export function getTasksDueSoon(tasks, timeframe = 10) {
    return tasks.filter(task => task.dueTime <= timeframe);
  }
  
  export function sendReminders(task) {
    setTimeout(() => {
      alert(`Reminder: Task "${task.title}" is due!`);
    }, task.dueTime * 60 * 1000);
  }
  