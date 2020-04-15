// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes"); // null if no notes
  return notesJSON ? JSON.parse(notesJSON) : [];
};

// Save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDom = (note) => {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  button.textContent = "x";
  noteEl.appendChild(button);
  button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  textEl.setAttribute("href", `/edit.html#${note.id}`);
  textEl.textContent = note.title ? note.title : "Unnamed note";
  noteEl.appendChild(textEl);

  return noteEl;
};

// Render application notes
const renderNotes = (notes, filters) => {
  // Create a list of filtered notes
  if (notes) {
    const filteredNotes = notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(filters.searchText.toLowerCase());
    });
    // Empty the div#notes
    document.querySelector("#notes").innerHTML = "";

    // Append filtered notes to div#notes
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDom(note);
      document.querySelector("#notes").appendChild(noteEl);
    });
  }
};
