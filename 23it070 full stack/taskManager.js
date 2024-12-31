const tasks = [];

export function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority.");
        }
        tasks.push(task);
        console.log("Task added successfully!");
    } catch (error) {
        console.error(error.message);
    }
}

export function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Tasks sorted by priority:", tasks);
}

export function getTasksDueWithin(minutes) {
    const now = 0;
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}

export function scheduleReminders() {
    tasks.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
            
            const reminderDiv = document.createElement("div");
            reminderDiv.classList.add("reminder");
            reminderDiv.textContent = `Reminder: Task "${task.title}" is due now!`;
            document.getElementById("reminders").appendChild(reminderDiv);
        }, task.dueTime * 60000); 
    });
}

export { tasks }; 