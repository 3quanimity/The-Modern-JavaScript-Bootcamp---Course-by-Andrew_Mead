let notes = getSavedNotes();

// filters
const filters = {
  searchText: "",
};

renderNotes(notes, filters);

// Handling Create Note button
document.querySelector("#add-note").addEventListener("click", () => {
  const newNote = {
    id: uuidv4(),
    title: "",
    body: "",
  };
  notes.push(newNote);
  saveNotes(notes);
  location.assign(`/edit.html#${newNote.id}`);
});

// Handling search-note input
document.querySelector("#search-note").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// Handling #filter-by drop-down
document.querySelector("#filter-by").addEventListener("input", (e) => {});

// Sync data across pages
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
