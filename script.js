document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Add event listener to mark task as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Append delete button to the task item
        li.appendChild(deleteButton);
        // Append the task item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);
    
    // Add task when 'Enter' key is pressed
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
