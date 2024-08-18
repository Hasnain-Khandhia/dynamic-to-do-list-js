document.addEventListener('DOMContentLoaded', function() {
    // All subsequent code will go inside this function
});
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Continue with the next steps
});
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        // Get the value from the input field and trim any extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input field is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add an event listener to the remove button to delete the task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Continue with the next steps
});
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); 
    // 'false' indicates not to save again to Local Storage since they are already stored.
}
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});
function addTask(taskText, save = true) {
    // Task creation logic remains the same
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        removeTask(li, taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage if `save` is true
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = '';
}
function removeTask(taskElement, taskText) {
    taskList.removeChild(taskElement);

    // Remove task from Local Storage
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
