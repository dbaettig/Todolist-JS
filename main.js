const onGoing = document.getElementById('onGoing');
const finished = document.getElementById('finished');
const addButton = document.getElementById('addButton');
const input = document.getElementById('input');
const deleteAllButton = document.getElementById('deleteAllButton');



// ger entertangenten funktion
input.addEventListener('keydown', function handleKeydown(e) {
    var text = input.value;

    if (e.keyCode === 13) {
        if (text !== '') {
            addList();
            input.value = ' ';
        }else{
            alert('WRITE SOMETHING')
        }
    }
      });


//lägger till en rad todo i att göra listan   
addButton.addEventListener('click', addList);

function addList() {
    const li = document.createElement('li')
    li.id = "items";
    li.innerText = input.value;
    document.getElementById('onGoing').appendChild(li);
      
    //lägger till doneknapp i onGoing
    var doneButton = document.createElement('button');
    const t = document.createTextNode("Done");
    doneButton.id = "doneButton";
    doneButton.appendChild(t);
    onGoing.appendChild(doneButton);

    //lägger till deleteknapp i onGoing 
    var deleteButton = document.createElement('button');
    const d = document.createTextNode("delete");
    deleteButton.id = "deleteButton";
    deleteButton.appendChild(d);
    onGoing.appendChild(deleteButton);
    input.value = '';
  

    //raderar i ongoing
deleteButton.addEventListener('click', deleteTodo);
function deleteTodo() {
    onGoing.removeChild(li);
    onGoing.removeChild(deleteButton);
    onGoing.removeChild(doneButton);

}

//flyttar raden från att göra listan till har gjort listan
doneButton.addEventListener('click', moveToDone);
    
    function moveToDone(){
    onGoing.removeChild(li);
    onGoing.removeChild(doneButton);
    onGoing.removeChild(deleteButton);
    finished.appendChild(li);
    finished.appendChild(deleteButton);
}

    // raderar i donelistan och knappen när jag trycker på delete
    deleteButton.addEventListener('click', deleteDoneList);
    
    function deleteDoneList(){
        finished.removeChild(li);
        finished.removeChild(deleteButton);

} 
    
deleteAllButton.addEventListener('click', deleteAll)
    
    function deleteAll () {
    onGoing.innerHTML = '';
    finished.innerHTML = '';

}
    
}// STÄNGER ADDLIST FUNKTIONEN
        

