console.log("Welcome to my notes");
showNotes();

//if user click on the add note then this event is fire
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = '';
    console.log(notesObj);

    showNotes();


});
//for showing all notes from local storage...
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element,index) {
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class=" card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button  id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>

        `

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML='<h5>Nothing to show here pls add some note ...</h5>';
    }

}
//delete function....
function deleteNote(id){
    console.log("delete",id);

    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(id,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}
// search functionality..
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputval=search.value.toLowerCase();
    // console.log(inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerHTML;
        if(cardtxt.includes(inputval)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
        // console.log(cardtxt);
    })
})
   

