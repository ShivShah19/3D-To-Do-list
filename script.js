const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// add a new task to the to-do list

function addTask() {
  const task = inputTask.value;
  if (!task) {
    alert("Enter your task"); // return alert message if the task is empty
  } else {
    // create a new list item and add it to the to-do list
    const newTask = document.createElement("li");
    newTask.innerHTML = task + '<button class="delete-button">Delete</button>';
    todoList.appendChild(newTask);

    // clear the input field
    inputTask.value = "";
  }
}

todoList.addEventListener("click", function (event) {
  if (event.target.className === "delete-button") {
    event.target.parentElement.remove();
  }
});

//  click on add button
addButton.addEventListener("click", addTask);

// click enter to Add task
inputTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
