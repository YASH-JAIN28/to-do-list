document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const newTaskInput = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const newTaskText = newTaskInput.value.trim();
      
      if (newTaskText !== "") {
          addTask(newTaskText);
          newTaskInput.value = "";
      }
  });

  function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', function() {
          todoList.removeChild(li);
      });

      li.appendChild(deleteButton);
      todoList.appendChild(li);
  }
});
