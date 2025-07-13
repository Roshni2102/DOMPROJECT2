
const textArea = document.querySelector(".textarea");
console.log(textArea);
const button = document.querySelector(".button");
console.log(button);
const todoList = document.querySelector(".todolist");

button.addEventListener("click", addTodoListItem);

function addTodoListItem() {
    console.log("button clicked");
    console.log(textArea.value);

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemall");
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    // console.log(item);

    item.classList.add("item");


    toDoDiv.appendChild(item);

    if (textArea.value === "")

        return;

    const deletButton = document.createElement("button");
    deletButton.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';
    deletButton.classList.add("trash-button");

    toDoDiv.appendChild(deletButton);


    todoList.appendChild(toDoDiv);
    textArea.value = ""; // Clear the textarea after adding the item    

}
todoList.addEventListener("click", deleteItem);
function deleteItem(e) {
    const item = e.target;

    if (item.classList[0] === "trash-button") { // Check if the clicked element is a trash button
        const todo = item.parentElement;
        todo.remove(); // Remove the entire todo item
    }
} 