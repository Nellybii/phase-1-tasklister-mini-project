document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //const button = document.getElementById("new-task-description")
  //console.log(id)
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todo = document.getElementById("new-task-description").value;
    //console.log(todo)
    addTodo(todo);
  });

  function addTodo(todo) {
    let newItem = document.createElement("li");
    newItem.textContent = todo;
    //console.log(newItem)
    document.getElementById("tasks").appendChild(newItem);
  }
});
