/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { refs } from './js/refs.js';
import { nanoid } from 'nanoid';
import { renderTask } from './js/render-tasks.js';

const TASK_LIST = 'taskList';
let tasks = JSON.parse(localStorage.getItem(TASK_LIST)) ?? [];
renderTask(tasks);

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();
  const taskDescription = event.target.elements.taskDescription.value.trim();

  const newTask = {
    taskName,
    taskDescription,
    id: nanoid(),
  };

  tasks.push(newTask);

  localStorage.setItem(TASK_LIST, JSON.stringify(tasks));

  renderTask(tasks);
  refs.form.reset();
});

//  дилегування,
//  відслідкувати що це саме кнопка,
//  одтимати ІД з батьківськго елементу цієї кнопки(лі)
//  видалитии елемент з масиву
//  перерендерити з масиву

refs.ul.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    const dataId = event.target.closest('[data-id]').dataset.id;
    tasks = tasks.filter(task => {
      return task.id !== dataId;
    });
    console.log(tasks)
    localStorage.setItem(TASK_LIST, JSON.stringify(tasks));
    renderTask(tasks);
  }
});
