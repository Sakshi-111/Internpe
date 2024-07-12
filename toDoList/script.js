// Function to add a new task to the list
function addTask() {
    // Get the task input field and its value
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    // Check if the input field is not empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Create a text node with the task text and append it to the list item
    const taskNode = document.createTextNode(taskText);
    listItem.appendChild(taskNode);
    
    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
    };
    
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
    
    // Append the new list item to the task list
    document.getElementById('task-list').appendChild(listItem);
    
    // Clear the task input field
    taskInput.value = '';
}

// Function to mark a task as completed or not completed
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
