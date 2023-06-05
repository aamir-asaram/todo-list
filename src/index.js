import './style.css';
import List from './modules/todo-list.js';

const list = new List();
if (localStorage.getItem('tasks')) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    const newTask = {
      description: task.description,
      index: task.index,
      checked: task.checked,
    };
    list.add(newTask);
  });
}
const add = document.getElementById('input');
add.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && add.value !== '') {
    const newTask = {
      description: add.value,
      index: list.tasks.length + 1,
      checked: false,
    };
    list.add(newTask);
    add.value = '';
  }
});
