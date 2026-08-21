const inp = document.querySelector("input");
const btn = document.querySelector("#add");

const todoBox = document.querySelector(".Todo-list");
btn.addEventListener("click", () => {
    const value = inp.value;

    if (value.trim() === "") return;


    todoBox.innerHTML += `<div class="li">
                <h3>${value} </h3>
                <div>
                    <button class="btn edit" onclick="editTask(this)">Edit</button>
                    <button class="btn del" onclick="deleteTask(this)">Delete</button>
                </div>
            </div>`;

    inp.value = "";

    console.log(value);
})

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

// // ------ edit using -> prompt

// function editTask(button){
//     const task = button.parentElement.parentElement.querySelector("h3");

//     const newValue= prompt("Edit task:", task.innerText);

//     if(newValue !== null && newValue.trim() !== ""){
//         task.innerText= newValue;
//     }

// }

function editTask(button) {
    const li = button.parentElement.parentElement;
    const h3 = li.querySelector("h3");

    const oldValue = h3.innerText;

    h3.innerHTML = `<input type="text" value="${oldValue}">`;

    button.innerText = "Save";

    button.onclick = function () {
        const input = h3.querySelector("input");

        h3.innerText = input.value;

        button.innerText = "Edit";

        button.onclick = function () {
            editTask(button);
        };
    };
}