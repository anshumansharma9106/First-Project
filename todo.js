//selecting elements
const inputField = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const footerText = document.querySelector(".list-footer");

//Funtion tp update counter;
function updateCounter() {
  const totalTasks = document.querySelectorAll(".task-item").length;
  const completedTasks = document.querySelectorAll(
    ".task-item.completed",
  ).length;

  footerText.innerText = `${completedTasks} of ${totalTasks} tasks completed`;
}

//function to create a new task
function addTask() {
  const taskValue = inputField.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  //create the li element
  const li = document.createElement("li");
  li.classList.add("task-item");

  //set the internal html
  li.innerHTML = `
    <input type="checkbox" />
    <span class="task-text">${taskValue}</span>
    <i class="fa-regular fa-trash-can delete-icon"></i>`;

  //Add to list
  taskList.appendChild(li);

  //reset the in put box;
  inputField.value = "";
  //update the counter
  updateCounter();
}

taskList.addEventListener("click", (e) => {
  const target = e.target;
  const parentLi = target.parentElement;

  //Delete task
  if (target.classList.contains("delete-icon")) {
    parentLi.remove();
  }

  //Toggle complete
  if (target.type === "checkbox") {
    parentLi.classList.toggle("completed", target.checked);
  }

  updateCounter();
});

//add task on button click
addBtn.addEventListener("click", addTask);

//add task on enter key press
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
updateCounter();
