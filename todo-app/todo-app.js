// todos list 📝
let todos = getSavedTodos();

// Filters 🚥
const filters = {
  searchTodoText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

// Handling #search-todo-input
document.querySelector("#search-todo-input").addEventListener("input", (e) => {
  filters.searchTodoText = e.target.value;
  renderTodos(todos, filters);
});

// Handling #add-Todo form
document.querySelector("#add-Todo").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.addTodo.value,
    isCompleted: false,
  });
  saveTodos(todos);
  e.target.elements.addTodo.value = "";
  renderTodos(todos, filters);
});

// Handling #hide-completed checkbox
document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
