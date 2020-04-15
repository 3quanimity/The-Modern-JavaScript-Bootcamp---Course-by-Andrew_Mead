// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON ? JSON.parse(todosJSON) : [];
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Remove todo by id from list
removeTodo = (id) => {
  todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  // Filtering todos
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchTodoText.toLowerCase());
    const hideCompleteMatch = filters.hideCompleted ? !todo.isCompleted : true;

    return searchTextMatch && hideCompleteMatch;
  });

  // Summary : how many todos still need to be complete (h2 element)
  const incompleteTodos = filteredTodos.filter((t) => !t.isCompleted);
  generateSummaryDOM(incompleteTodos);

  // Clear todos div content
  document.querySelector("#todos").innerHTML = "";

  // Rendering todos
  filteredTodos.map((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  let todoEl = document.createElement("div");
  let checkbox = document.createElement("input");
  let todoText = document.createElement("span");
  let removeButton = document.createElement("button");

  // Setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.isCompleted;
  checkbox.addEventListener("change ", () => {
    todo.isCompleted = checkbox.checked;
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(checkbox);

  // Setup todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup remove button
  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.querySelector("#preview-new-todo");
  summary.innerHTML = "";
  summary.textContent = `You still have ${incompleteTodos.length} todos left!`;
};
