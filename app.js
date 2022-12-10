var main = document.getElementById("main");
var inp = document.getElementById("inp");
function add() {
  console.log(inp.value);
  if (inp.value == "") {
    alert("Enter a message");
  } else {
    var li = document.createElement("li");
    li.classList.add("inline")
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText);
    inp.value = "";

    // Create Button
    var editbtn = document.createElement("BUTTON");
    var editbtnText = document.createTextNode("Edit Value");
    editbtn.classList.add("button")
    editbtn.appendChild(editbtnText);
    editbtn.setAttribute("onclick", "editTodo(this)");
    li.appendChild(editbtn);

    // Del Button
    var delbtn = document.createElement("BUTTON");
    var editdelbtn = document.createTextNode("Delete Value");
    delbtn.classList.add("button")
    delbtn.appendChild(editdelbtn);
    delbtn.setAttribute("onclick", "deleteTodo(this)");
    li.appendChild(delbtn);
    main.appendChild(li);
  }
}
function editTodo(element) {
  var newValue = prompt("Enter Updated Value");
  console.log(newValue);
  element.parentNode.firstChild.nodeValue = newValue;
//   console.log(newValue);
  // element.parentNode.firstChild.nodeValue = document.getElementById("inp").value;
//   newValue = "";
}
function deleteTodo(element) {
  element.parentNode.remove();
}
function delAll() {
  main.innerHTML = "";
}