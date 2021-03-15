console.log('hello krishna')
showNotes();
//If user adds a note, add it to the localstorage
let addBtn = document.getElementById('bttnprimary');
addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('textarea');
    let notes = localStorage.getItem("notesoperation");
    if (notes == null) {
        notesobJ = [];
    }
    else {
        notesobJ = JSON.parse(notes);
    }
    notesobJ.push(addtxt.value);
    localStorage.setItem("notesoperation", JSON.stringify(notesobJ));
    addtxt.value = "";
    showNotes();
});
// function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notesoperation");
    if (notes == null) {
        notesobJ = [];
    }
    else {
        notesobJ = JSON.parse(notes);
    }
    let html = "";
    notesobJ.forEach(function (element, index) {
        html += `<div class="Notescontainer">
        <div class="textbox2">
            <h5 class="cardtitle">Note ${index + 1}</h5>
            <p class="cardtext">${element}</p>
        </div>
        <button id="${index} "onclick="deletenote(this.id)" class="bttnprimar">Delete Note</button>
    </div> `
    });
    let notesElm = document.getElementById("notesoperation");
    if (notesobJ.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section to add Notes`
    }
}
//function to delete a Note 
function deletenote(index) {
    let notes = localStorage.getItem("notesoperation");
    if (notes == null) {
        notesobJ = [];
    }
    else {
        notesobJ = JSON.parse(notes);
    }
    notesobJ.splice(index, 1);
    localStorage.setItem("notesoperation", JSON.stringify(notesobJ));
    showNotes();
}
let search = document.getElementById('search');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();

    let notecards = document.getElementsByClassName('Notescontainer');

    Array.from(notecards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});
/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 