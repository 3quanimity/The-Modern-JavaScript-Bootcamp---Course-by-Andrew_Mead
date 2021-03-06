const titleElement = document.querySelector("#note-title");
const dateElement = document.querySelector("#last-edited");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (note === undefined) {
  location.assign("/index.html");
}

// Filling fields from local storage on initial page load
titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.innerHTML = generateLastEdited(note.updatedAt);

// Setup input event for title
titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.innerHTML = generateLastEdited(note.updatedAt);

  saveNotes(notes);
});

// Setup input event for body
bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.innerHTML = generateLastEdited(note.updatedAt);

  saveNotes(notes);
});

// Setup Remove button that removes notes and sends user back to home page
removeElement.addEventListener("click", () => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign(`/edit.html`);
});

// Sync data across pages - "storage" fires only on the other pages
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (note === undefined) {
      location.assign("/index.html");
    }

    // Filling fields from local storage
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.innerHTML = generateLastEdited(note.updatedAt);
  }
});
