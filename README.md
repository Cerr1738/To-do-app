This is a simple and interactive to-do list web application built with HTML, CSS, and JavaScript.
It allows users to add, complete, delete, and filter tasks. The application also supports saving tasks to local storage,
ensuring data persists across page reloads. Additional features include toggling views between all tasks, pending tasks, and completed tasks.


Features
Add Tasks: Enter new tasks with a text input and add them to the task list.
Mark as Complete: Mark tasks as completed with a dedicated "Complete" button.
Undo Completion: Tasks can be marked as incomplete.
Delete Tasks: Remove tasks individually with a "Delete" button.
Filter Tasks: Toggle views to display all tasks, pending tasks, or completed tasks.
Persistent Storage: Uses local storage to save tasks, ensuring they persist across page reloads.
Responsive Design: Works well on mobile devices.
Getting Started


Getting Started
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge) is required to run this app locally.

Installation
Clone the repository:
git clone https://github.com/your-username/todo-list-app.git

Open the index.html file in your browser to start the application.

Usage
Adding a Task: Type your task in the input field and click "Add Task."
Marking as Complete: Click the "Complete" button next to a task to mark it as completed.
Deleting a Task: Click the "Delete" button next to a task to remove it from the list.
Filtering Tasks: Use the "All," "Pending," or "Completed" buttons at the top of the list to filter tasks.
Persistent Storage: Tasks remain saved in local storage and reappear when you reload the page.

File Structure
todo-list-app/
├── index.html        # Main HTML structure
├── styles.css        # CSS styles for layout and appearance
├── script.js         # JavaScript for functionality and event handling
└── README.md         # Project documentation


Code Overview
index.html: The HTML file contains the basic structure of the app, including buttons, input fields, and the task list container.
styles.css: The CSS file styles the app with a clean, responsive design and provides visual feedback for different task states (e.g., completed vs. pending).
script.js: The JavaScript file handles DOM manipulation, event listeners, and local storage functionality. Major functions include:
addTask(): Adds a new task.
loadTasks(): Loads tasks from local storage on page load.
renderTask(): Displays a task on the page.
toggleTask(): Marks tasks as complete or incomplete.
deleteTask(): Deletes a task from the UI and storage.
filterTasks(): Filters tasks based on view selection (All, Pending, Completed).
