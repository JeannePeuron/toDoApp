// 1) Ajouter une tâche
// Un champ texte + un bouton “Ajouter”

// Si champ vide : message d’erreur (dans la page)

// addEventListener sur le bouton Ajouter

// Créer une condition qui vient chercher l'input et qui dit que si elle est vide, on va chercher le p du message d'erreur et on affiche champ vide

// Ajout dans la liste

// Si le champ n'est pas vide alors on va chercher la liste et on l'affiche à l'intérieur le texte.

// 2) Afficher la liste
// Chaque tâche contient :

// un checkbox (fait / pas fait)

// le texte

// un bouton “Supprimer”

const add = document.getElementById("add");
const taskInput = document.getElementById("task-input");
const formError = document.getElementById("form-error");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

let taskArray = [];

// Empêche le rechargement du formulaire
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

// Bouton ajouter
add.addEventListener("click", function () {
  addTask();
});

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

// Affichage des tâches avec une checkbox
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
      </li>
    `;
  }
}

// Gestion du clic sur les checkbox
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("done-checkbox")) {
    let index = e.target.dataset.index;
    taskArray[index].state = e.target.checked;
    console.log(taskArray);
    showTaskList();
  }
});

const buttonTodo = document.getElementById("buttonTodo");
const buttonDone = document.getElementById("buttonDone");
const buttonAll = document.getElementById("buttonAll");

// Créer une copie de taskArray
// Splice que les indexs qui ont un state false = à faire
//
// Et appelle la fonction showTaskList avec ce tableau à jour

buttonTodo.addEventListener("click", function () {
  let newTaskArray = [...taskArray];

  for (let i = newTaskArray.length - 1; i >= 0; i--) {
    if (newTaskArray[i].state == true) {
      newTaskArray.splice(i, 1);
      console.log(newTaskArray);
    }
  }

  taskArray = newTaskArray;

  showTaskList();
});

buttonDone.addEventListener("click", function () {
  let newTaskArray = [...taskArray];

  for (let i = newTaskArray.length - 1; i >= 0; i--) {
    if (newTaskArray[i].state == false) {
      newTaskArray.splice(i, 1);
      console.log(newTaskArray);
    }
  }

  taskArray = newTaskArray;

  showTaskList();
});

buttonAll.addEventListener("click", function () {
  taskArray = taskArray;
  console.log(taskArray);
  showTaskList();
});

// LOGIQUE ÉTAPE 3 – FILTRES & ÉTAT DES TÂCHES

// ON NE PEUT PAS METTRE DE LISTENER A UNE CHECKBOX

// 3) Filtrage :
// - Je ne dois JAMAIS modifier taskArray directement pour filtrer
// - Je crée d’abord une COPIE du tableau taskArray dans une fonction
// - Cette copie sert uniquement à l’affichage

// 4) Bouton filtre "Non fait" :
// - Je travaille sur la copie du tableau
// - J’enlève (avec splice) les tâches qui sont faites (état === true)
// - J’appelle ensuite showTaskList avec ce tableau filtré

// Règle importante :
// taskArray = source de vérité
// L’affichage et les filtres ne sont qu’une vue de ce tableau
