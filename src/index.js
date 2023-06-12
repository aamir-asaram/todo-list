import './style.css';
import List from './modules/todo-list.js';
import Task from './modules/task.js';

const list = new List();
const list2 = new List();
const list3 = new List();
if (localStorage.getItem('tasks')) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    const newTask = new Task(task.description, task.index);
    newTask.checked = task.checked;
    list.add(newTask);
  });
}
const add = document.getElementById('input');
add.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && add.value !== '') {
    const newTask = new Task(add.value, list.tasks.length + 1);
    list.add(newTask);
    add.value = '';
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  list.reset();
});
