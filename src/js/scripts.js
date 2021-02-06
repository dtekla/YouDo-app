
let list = document.getElementById("list");

//function for deleting an item
function deleteElement(element) {
    element.addEventListener("click", event => {
        event.target.parentElement.remove();
    })
}
//creat list item by clicking on create button and deleting
document.getElementById("createBtn").addEventListener("click", function (){
    let listItem = document.createElement("li");
    list.append(listItem);
    listItem.innerText = document.getElementById("task").value;

    let deleteBtn = document.createElement("button");
    listItem.append(deleteBtn);
    deleteBtn.innerText = "töröl";

    deleteElement(deleteBtn);

})


