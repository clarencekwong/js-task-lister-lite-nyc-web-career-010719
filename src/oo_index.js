document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector("#create-task-form")
  const taskLists = document.querySelector("#tasks")
  const list = document.querySelector("#list")

  taskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskInput = document.querySelector("#new-task-description").value
    createNewTask(taskInput)
    taskForm.reset()
  })

  list.addEventListener('click', e => {
    if (e.target.dataset.action === 'delete') {
      e.target.parentNode.remove()
    }
  })

  function createNewTask(taskInput) {
    taskLists.innerHTML += `
    <li>${taskInput} <button data-action="delete">x</button></li>
    `
  }
});
