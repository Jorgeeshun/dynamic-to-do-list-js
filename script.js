document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const feedbackMessage = document.getElementById('feedback-message'); // Select the new feedback element

    // Function to add a task
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            // Display feedback message instead of using alert
            feedbackMessage.textContent = "Please enter a task.";
            feedbackMessage.style.color = "red"; // Optional: style the message
            return;
        }

        // Clear any previous feedback message
        feedbackMessage.textContent = "";

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button to remove the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className.add = 'remove-btn';

        // Add an event listener to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append elements
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
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