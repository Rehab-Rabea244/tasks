let todos = JSON.parse(localStorage.getItem("todos")) ;

const app = document.getElementById("app");



const container = document.createElement("div");
container.className = "container mt-5";

app.appendChild(container);

const card = document.createElement("div");
card.className = "card shadow p-4 mx-auto";
card.style.maxWidth = "500px";

container.appendChild(card);

const title = document.createElement("h2");
title.textContent = "My To-Do List";
title.className = "text-center mb-4";

card.appendChild(title);


const inputGroup = document.createElement("div");
inputGroup.className = "input-group mb-3";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task";
input.className = "form-control";

const addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.className = "btn btn-primary";

inputGroup.appendChild(input);
inputGroup.appendChild(addButton);

card.appendChild(inputGroup);


const list = document.createElement("div");

card.appendChild(list);


function displayTodos() {

    list.innerHTML = "";

    todos.forEach((todo, index) => {

        const row = document.createElement("div");
        row.className =
            "d-flex justify-content-between align-items-center border-bottom py-2";

        const text = document.createElement("span");
        text.textContent = todo;

        const buttons = document.createElement("div");

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "✏️";
        editButton.className = "btn btn-sm btn-warning me-2";

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.className = "btn btn-sm btn-danger";


        // Edit
        editButton.addEventListener("click", function () {

            const newTask = prompt("Edit your task:", todos[index]);

            if (newTask !== null && newTask.trim() !== "") {

                todos[index] = newTask.trim();

                saveTodos();
                displayTodos();
            }
        });


        // Delete
        deleteButton.addEventListener("click", function () {

            todos.splice(index, 1);

            saveTodos();
            displayTodos();
        });


        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);

        row.appendChild(text);
        row.appendChild(buttons);

        list.appendChild(row);
    });
}

addButton.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    todos.push(task);

    saveTodos();

    input.value = "";

    displayTodos();
});


function saveTodos() {

    localStorage.setItem("todos", JSON.stringify(todos));
}


input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addButton.click();
    }

});

displayTodos();