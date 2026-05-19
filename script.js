const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {

  const taskText = taskInput.value.trim();
  const taskTime = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${taskText}</strong><br>
    <small>${taskTime}</small>

    <div class="task-buttons">
      <button class="completeBtn">Complete</button>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";

  const completeBtn = li.querySelector(".completeBtn");
  const editBtn = li.querySelector(".editBtn");
  const deleteBtn = li.querySelector(".deleteBtn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  editBtn.addEventListener("click", () => {

    const newTask = prompt("Edit task:", taskText);

    if (newTask !== null && newTask.trim() !== "") {
      li.querySelector("strong").textContent = newTask;
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}