// Get existing notes from localStorage
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

// Sort notes depending on dropdown value
const sortNotes = (notes, sortBy) => {
  // TODO: convert to switch
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
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

// Generate the last edited message
const generateLastEdited = function (timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`;
};
