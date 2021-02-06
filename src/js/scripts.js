
let list = document.getElementById("list");
//creat lis item by clicking on create button
document.getElementById("createBtn").addEventListener("click", function (){
    let listItem = document.createElement("li");
    list.append(listItem);
    listItem.innerText = document.getElementById("task").value;
    })


