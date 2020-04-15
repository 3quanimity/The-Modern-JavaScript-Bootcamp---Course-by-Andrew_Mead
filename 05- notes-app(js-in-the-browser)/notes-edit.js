const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((note) => note.id === noteId);

if (note === undefined) {
  location.assign("/index.html");
}

// Filling fields from local storage
titleElement.value = note.title;
bodyElement.value = note.body;

// Setup input event for title
titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  saveNotes(notes);
});
// Setup input event for body
bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  saveNotes(notes);
});

// Setup Remove button that removes notes and sends user back to home page
removeElement.addEventListener("click", () => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign(`/edit.html`);
});
