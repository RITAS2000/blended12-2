export function createMarkupItem(newTask) {
  return `<li class="task-list-item" data-id="${newTask.id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${newTask.taskName}</h3>
      <p>${newTask.taskDescription}</p>
  </li>`
}
 
export function createMarkupList(tasks) { 
  return tasks.map(createMarkupItem).join("")
}