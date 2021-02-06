
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

let date = document.getElementById("date");
let priority = document.getElementById("prio");

listIndex = localStorage.length;
createBtn.addEventListener("click", function (){
    if (task.value.length < 6){
        alert("minimum 6 karakterből álljon a task-od!");
    } else {
        listIndex++;
        localStorage.setItem(`task ${listIndex}`, JSON.stringify(task.value));

        let listItem = document.createElement("li");
        list.append(listItem);
        listItem.innerText = JSON.parse(localStorage.getItem(`task ${listIndex}`));

        let deleteBtn = document.createElement("button");
        listItem.append(deleteBtn);
        deleteBtn.innerText = "töröl";

        let para = document.createElement("p");
        para.innerHTML = `Due date:  ${date.value}, priority :  ${priority.value}`;
        listItem.append(para);
        
        deleteElement(deleteBtn);


    }
})

 /*
window.addEventListener('load', (event) => {
    for (let i = 1; i < localStorage.length+1; i++) {
        let x = document.createElement("li");
        x.innerHTML = JSON.parse(localStorage.getItem(`task ${i}`));
        list.append(x);

        let deleteBtn = document.createElement("button");
        x.append(deleteBtn);
        deleteBtn.innerText = "töröl";

        deleteElement(deleteBtn);

    }
});
*/


//validation of input and create btn disable switch
task.addEventListener("keyup", event => {
    if (task.value.length < 6) {
        task.setAttribute("style", "background-color: red");
    } else if (task.value.length > 6) {
        task.setAttribute("style", "background-color: green");
        createBtn.removeAttribute("disabled");
    }
});


