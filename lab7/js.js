function allowDrop(ev) {
    ev.preventDefault();  
}

//drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//drog
function drop(ev) {
    ev.preventDefault(); 
    var data = ev.dataTransfer.getData("text"); 
    ev.target.appendChild(document.getElementById(data)); }
