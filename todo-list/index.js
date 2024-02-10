let create = document.getElementById("create");
let add = document.getElementById("add");
let todo1 = document.getElementById("todo1");
let todo2 = document.getElementById("todo2");
let todo3 = document.getElementById("todo3");
let todo4 = document.getElementById("todo4");
let remove = document.getElementById("remove");
// let debug = document.getElementById("debug");
const todoArray = [todo1, todo2, todo3, todo4];
let set = 0;


create.onclick = function createItem(){
   if (set < 4){
    input.style.display = "block";
    add.style.display = "block";
   }
   else{
       create.textContent = "No more items can be created";
       remove.style.display = "block";
   }
}

remove.onclick = function removeItem(){
    set -= 1;
    todoArray[set].textContent = "";
    todoArray[set].style.listStyleType = "none";
    create.textContent = "Create New Item";
    //debug.textContent = set;
    add.style.display = "none";
    if (set == 0){
        remove.style.display = "none";
    }
}

function hideItems(){
    add.style.display = "none";
    input.style.display = "none";
    input.value = "";
}

add.onclick = function addItem()
{
    let input = document.getElementById("input");
    todoArray[set].textContent = input.value;
    todoArray[set].style.listStyleType = "disc";
    set++;
    hideItems();
    // debug.textContent = set;
}