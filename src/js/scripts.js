
let list = document.getElementById("list");
let task = document.getElementById("task");
let createBtn = document.getElementById("createBtn");
//function for deleting an item
function deleteElement(element) {
    element.addEventListener("click", event => {
        event.target.parentElement.remove();
    })
}
//creat list item by clicking on create button and deleting
createBtn.addEventListener("click", function (){
    if (task.value.length < 6){
        alert("minimum 6 karakterből álljon a task-od!");
    } else {
        let listItem = document.createElement("li");
        list.append(listItem);
        listItem.innerText = task.value;

        let deleteBtn = document.createElement("button");
        listItem.append(deleteBtn);
        deleteBtn.innerText = "töröl";

        deleteElement(deleteBtn);
    }
})

//validation of input and create btn disable switch
task.addEventListener("keyup", event => {
    if (task.value.length < 6) {
        task.setAttribute("style", "background-color: red");
    } else if (task.value.length > 6) {
        task.setAttribute("style", "background-color: green");
        createBtn.removeAttribute("disabled");
    }
});
