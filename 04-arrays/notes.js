// const notes = ["Note 1", "Note 2", "Note 3"];
const notes2 = [
  {
    title: "Nwote 1",
    body: "Body of the first note"
  },
  {
    title: "a Note 2",
    body: "Body of the second note find me"
  },
  {
    title: "Note 3",
    body: "Body of the third note"
  }
];

// // 🦝 MANIPULATING ARRAY ITEMS
// console.log(notes.pop()); // removes last item from array (& returns it)
// notes.push("New Last Note"); // adds an item at the end of an array

// console.log(notes.shift()); // removes first item from an array (& returns it)
// notes.unshift("New First Note"); // adds an item at the beginning of an array

// // add OR remove items from the middle of an array
// notes.splice(1, 1); // removes second item
// notes.splice(1, 0, "injected item"); // injects a new item in the index 1 (without deleting anything)
// notes.splice(1, 1, "injected item"); // injects a new item in the index 1 (& deletes the previous one in that position)

// notes[2] = "new note 3"; // more straightforward than splice for "replacing items"

// // 🦝 LOOPING THROUGH ARRAYS
// // .forEach method : have to have an array and go through the whole thing from start to end
// notes.forEach(function(item, index) {
//   // a Callback function is a function that gets passed to another function as an argument
//   console.log(index, ":", item);
// });

// // for loop method : have more flexibility than forEach (don't have to go through the entire array)
// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// // 🦝 SEARCHING ARRAYS
// // .indexOf always uses "===",
// // in js objects are equal only if they are the exact same object stored in the memory (1)
// let position = notes2.indexOf({});
// console.log("position:", position);

// // .findIndex is very efficient as it stops after finding the item,
// // it also allows us to look for empty objects
// let betterPosition = notes2.findIndex(el => el.title == undefined);
// console.log("betterPosition:", betterPosition);

// Creating a function that looks for a note by title and return the whole note if found
// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex(
//     (note, i) =>
//       note.title && note.title.toLowerCase() === noteTitle.toLowerCase()
//   );
//   return index > 0 ? notes[index] : "Note not found!";
// };

// const findNote = (notes, noteTitle) => {
//     // .find Method
//   const note = notes.find(
//     (note, i) =>
//       note.title && note.title.toLowerCase() === noteTitle.toLowerCase()
//   );
//   return note ? note : "Note not found!";
// };

// const note = findNote(notes2, "note 5");
// console.log("note:", note);

// // 🦝 FILTERING ARRAYS

// const filteredNotes = notes2.filter((note, index) => {
//   const isTitleMatch = note.title.toLowerCase().includes("find me");
//   const isBodyMatch = note.body.toLowerCase().includes("find me");
//   return isTitleMatch || isBodyMatch;
// });
// console.table(filteredNotes);

// const findNotes = (notes, searchText) =>
//   notes.filter(
//     (note, index) =>
//       note.title.toLowerCase().includes(searchText) ||
//       note.body.toLowerCase().includes(searchText)
//   );
// console.table(findNotes(notes2, "first"));

// // 🦝 SORTING ARRAYS
const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortNotes(notes2);

console.table(notes2);
// console.log(notes.length);
// console.log("notes:", notes);
