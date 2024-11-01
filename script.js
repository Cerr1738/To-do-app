document.addEventListener('DOMContentLoaded', loadTasks);
document.addEventListener('DOMContentLoaded', () => filterTasks('all'));
const addTaskButton = document.querySelector('.add-task-btn');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');
const viewButtons = document.querySelectorAll('.view-btn');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const task = { text: taskText, completed: false };
    saveTask(task);
    renderTask(task);
    taskInput.value = '';
  }
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(renderTask);
}


function renderTask(task) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  if (task.completed) taskItem.classList.add('completed');
  
  const taskText = document.createElement('span');
  taskText.textContent = task.text;
  
  const taskButtons = document.createElement('div');
  taskButtons.className = 'task-buttons';

  const completeButton = document.createElement('button');
  completeButton.textContent = task.completed ? 'Undo' : 'Complete';
  completeButton.className = 'complete-btn';
  completeButton.onclick = () => toggleTask(task, taskItem);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = () => deleteTask(task, taskItem);

  taskButtons.appendChild(completeButton);
  taskButtons.appendChild(deleteButton);
  
  taskItem.appendChild(taskText);
  taskItem.appendChild(taskButtons);
  taskList.appendChild(taskItem);
}

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
     
      viewButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const view = button.getAttribute('data-view');
      filterTasks(view);
    });
  });

function filterTasks(view) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';  
  
    tasks.forEach(task => {
      if (
        view === 'all' || 
        (view === 'pending' && !task.completed) || 
        (view === 'completed' && task.completed)
      ) {
        renderTask(task);
      }
    });
  }


function toggleTask(task, taskElement) {
  task.completed = !task.completed;
  updateTaskInLocalStorage(task);

 
  taskElement.classList.toggle('completed');
  taskElement.querySelector('.complete-btn').textContent = task.completed ? 'Undo' : 'Complete';
}


function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function updateTaskInLocalStorage(updatedTask) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.findIndex(t => t.text === updatedTask.text);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}


function deleteTask(task, taskElement) {
  const tasks = JSON.parse(localStorage.getItem('tasks')).filter(t => t.text !== task.text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskElement.remove();
}
