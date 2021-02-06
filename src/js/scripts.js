
let list = document.getElementById("list");
let task = document.getElementById("task");
let createBtn = document.getElementById("createBtn");


let arr = [];

window.addEventListener('load',  function () {
    if (arr[0] !== null) {
        for (let i = 0; i < (JSON.parse(localStorage.getItem("task")).length) ; i++) {
            console.log(arr);
            let listItem = document.createElement("li");
            list.append(listItem);
            listItem.innerText = JSON.parse(localStorage.getItem("task"))[i];

            let deleteBtn = document.createElement("button");
            listItem.append(deleteBtn);
            deleteBtn.innerText = "töröl";

            let para = document.createElement("p");
            para.innerHTML = `Due date:  ${date.value}, priority :  ${priority.value}`;
            listItem.append(para);

            deleteBtn.addEventListener("click", event => {
                event.target.parentElement.remove();
            })

        }
    }

});


//creat list item by clicking on create button and deleting
let date = document.getElementById("date");
let priority = document.getElementById("prio");


createBtn.addEventListener("click", function (){
    if (task.value.length < 6){
        alert("minimum 6 karakterből álljon a task-od!");
    } else {
        arr.push(task.value)
        localStorage.setItem("task", JSON.stringify(arr));

        let listItem = document.createElement("li");
        list.append(listItem);
        listItem.innerText = task.value;

        let deleteBtn = document.createElement("button");
        listItem.append(deleteBtn);
        deleteBtn.innerText = "töröl";

        let para = document.createElement("p");
        para.innerHTML = `Due date:  ${date.value}, priority :  ${priority.value}`;
        listItem.append(para);

        deleteBtn.addEventListener("click", event => {
                event.target.parentElement.remove()
            })
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

