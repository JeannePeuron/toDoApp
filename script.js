// 1) Ajouter une tâche
// Un champ texte + un bouton “Ajouter”

// Si champ vide : message d’erreur (dans la page)

// addEventListener sur le bouton Ajouter

// Créer une condition qui vient chercher l'input et qui dit que si elle est vide, on va chercher le p du message d'erreur et on affiche champ vide

// Ajout dans la liste

// Si le champ n'est pas vide alors on va chercher la liste et on l'affiche à l'intérieur le texte.

const add = document.getElementById("add");
const taskInput = document.getElementById("task-input");
const formError = document.getElementById("form-error");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

let taskArray = [];

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("Formulaire envoyé sans rechargement");
});

add.addEventListener("click", () => {
  if (taskInput.value === "") {
    formError.innerText = `
        Veuillez saisir une tâche
        `;
    // console.log("Veuillez saisir une tâche");
  } else {
    taskArray.push(`${taskInput.value}`);

    for (let i = 0; i < taskArray.length; i++) {
      taskList.innerHTML += `

        <li id="task">
            <div id="checkbox">
                <label for="check">Fait</label>
                <input type="checkbox" id="check">

                ${taskArray[i]}

                <label for="notCheck">Non fait</label>
                 <input type="checkbox" id="notCheck">
         </div>

     <button type="button">Supprimer</button>
    </li>
        `;
      // Il faut qu'à chaque tour de boucle, on ajoute une checkbox, le texte et le boutton
      // Dans le task
      //   console.log(taskArray[i]);
    }
  }
});

// 2) Afficher la liste
// Chaque tâche contient :

// un checkbox (fait / pas fait)

// le texte

// un bouton “Supprimer”

// Remplacer le innerHTML par un push sur un tableau. Donc initialiser un tableau.
// Puis, mapper sur le tableau en ajoutant la checkbox, le texte et le bouton.
