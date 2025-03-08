import { refs } from './refs.js';
import { createMarkupList } from './markup-tasks.js';

export function renderTask(tasks) {
  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', createMarkupList(tasks));
}
