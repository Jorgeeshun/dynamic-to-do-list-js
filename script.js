document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            return;
        }

        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element
        listItem.appendChild(removeBtn);

        // Append the new li element to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});