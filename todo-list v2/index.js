var form = document.getElementById("form");
var input = document.getElementById("input");  
var list = document.getElementById("list");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const todo = input.value;

    if(todo){
        const todoElement = document.createElement("li");
        todoElement.classList.toggle("uncompleted")
        todoElement.innerText = todo;
        list.appendChild(todoElement);
        input.value = "";
    }
})

list.addEventListener("click", function markAsComplete(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("complete");
    }
});
