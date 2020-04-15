// // 🧠 Create an array with five todos
// const todos = [
//   "walk the dog",
//   "clean the dishes",
//   "wash clothes",
//   "work hard",
//   "play hard"
// ];

// // 🧠 MANIPULATING ARRAY ITEMS
// // Remove the 3rd item
// todos.splice(2, 1);

// //Add a new item onto the end
// todos.push("rule the world");

// //Remove the first item from the list
// todos.shift();

// // Print a message with the number of todos
// console.log(`You have ${todos.length} todos in your list.`);

// // 🧠 LOOPING THROUGH ARRAYS
// // Print all items
// todos.forEach((item, index) => console.log(`${index + 1}. ${item}`));

// // Alternative Method (for loop)
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`);
// }

// // Alternative Method (better)
// todos.map((todo, i) => console.log(`${i + 1}. ${todo}`));

// ***************************************************************************************************//
const todos2 = [
  {
    text: "walk the dog",
    isCompleted: true
  },
  {
    text: "clean the dishes",
    isCompleted: false
  },
  {
    text: "wash clothes",
    isCompleted: false
  },
  {
    text: "work hard",
    isCompleted: true
  },
  {
    text: "play hard",
    isCompleted: true
  }
];
console.table(todos2);

// 🧠 Challenge Area:
// DELETE TODO FUNCTION
// Create a function to remove a todo by text value
const deleteTodo = (todoList, todoText) => {
  const indexToDelete = todoList.findIndex(
    todo => todo.text.toLowerCase() === todoText.toLowerCase()
  );

  indexToDelete >= 0
    ? (console.log(`"${todoList[indexToDelete].text}" deleted from your todos`),
      todoList.splice(indexToDelete, 1))
    : console.log("Item not found!");
};

deleteTodo(todos2, "wash clothes");
console.table(todos2);

// Create a function that shows undone todos
const showUndone = notes => notes.filter(note => !note.isCompleted);
console.table(showUndone(todos2));

// Sort todos so that uncompleted tasks show first
const sortTodos = todoList =>
  todoList.sort((a, b) => (!a.isCompleted && b.isCompleted ? -1 : 1));
sortTodos(todos2);
console.table(todos2);
