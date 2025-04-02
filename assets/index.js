document.getElementById("addNote").addEventListener("click", function() {
    const text = document.getElementById("noteText").value;
    const color = document.getElementById("noteColor").value;
    const note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = color;
    note.textContent = text;

    const randomRotate = Math.floor(Math.random() * 10 - 5) + "deg";
    note.style.setProperty("--rotate-degree", randomRotate);

    document.getElementById("notesContainer").appendChild(note);

    document.getElementById("noteText").value = "";
});