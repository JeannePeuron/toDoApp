// =======================
// Sélection des éléments
// =======================
const add = document.getElementById("add");
const taskInput = document.getElementById("task-input");
const formError = document.getElementById("form-error");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

const buttonTodo = document.getElementById("buttonTodo");
const buttonDone = document.getElementById("buttonDone");
const buttonAll = document.getElementById("buttonAll");

// =======================
// Données
// =======================
let taskArray = [];

// =======================
// Formulaire
// =======================
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

add.addEventListener("click", function () {
  addTask();
});

// =======================
// Ajouter une tâche
// =======================
function addTask() {
  if (taskInput.value === "") {
    formError.innerText = "Veuillez saisir une tâche";
    return;
  }

  formError.innerText = "";

  let task = {
    task: taskInput.value,
    state: false,
  };

  taskArray.push(task);
  taskInput.value = "";

  showTaskList();
}

// =======================
// Affichage des tâches
// =======================
function showTaskList() {
  taskList.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    let checked = "";
    let style = "";

    if (taskArray[i].state === true) {
      checked = "checked";
      style = "text-decoration: line-through";
    }

    taskList.innerHTML += `
      <li>
        <input
          type="checkbox"
          class="done-checkbox"
          data-index="${i}"
          ${checked}
        >

        <span style="${style}">
          ${taskArray[i].task}
        </span>

        <button
          type="button"
          class="delete-btn"
          data-index="${i}"
        >
          Supprimer
        </button>
      </li>
    `;
  }
}

// =======================
// Gestion des clics dans la liste
// =======================
taskList.addEventListener("click", function (e) {
  // Checkbox : fait / non fait
  if (e.target.classList.contains("done-checkbox")) {
    let index = e.target.dataset.index;
    taskArray[index].state = e.target.checked;
    showTaskList();
  }

  // Bouton supprimer
  if (e.target.classList.contains("delete-btn")) {
    let index = e.target.dataset.index;
    taskArray.splice(index, 1);
    showTaskList();
  }
});

// =======================
// Filtres
// =======================
buttonTodo.addEventListener("click", function () {
  let newTaskArray = [...taskArray];

  for (let i = newTaskArray.length - 1; i >= 0; i--) {
    if (newTaskArray[i].state === true) {
      newTaskArray.splice(i, 1);
    }
  }

  taskArray = newTaskArray;
  showTaskList();
});

buttonDone.addEventListener("click", function () {
  let newTaskArray = [...taskArray];

  for (let i = newTaskArray.length - 1; i >= 0; i--) {
    if (newTaskArray[i].state === false) {
      newTaskArray.splice(i, 1);
    }
  }

  taskArray = newTaskArray;
  showTaskList();
});

buttonAll.addEventListener("click", function () {
  showTaskList();
});
