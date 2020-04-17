let notes = getSavedNotes();

// filters
const filters = {
  searchText: "",
};

renderNotes(notes, filters);

// Handling Create Note button
document.querySelector("#add-note").addEventListener("click", () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();

  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
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

// // 🧪 messing around with momentjs
// const now = moment().valueOf();
// console.log("now:", now);
// now.subtract(1, "week").subtract(20, "days"); // chaining
// console.log(now.format("MMMM Do, YYYY")); // formating
// console.log(now.fromNow()); // time from now
// const nowTimestamp = now.valueOf();
// console.log(nowTimestamp);
// console.log(moment(nowTimestamp).toString());
