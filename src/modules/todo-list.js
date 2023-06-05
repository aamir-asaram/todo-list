import Task from './task.js';

const generateClearButton = () => {
  const sect = document.getElementById('wrapper');
  const clearSect = document.createElement('div');
  clearSect.className = 'clearSect';
  const clear = document.createElement('button');
  clear.innerText = 'Clear all completed';
  clear.className = 'clear';
  clearSect.appendChild(clear);
  sect.appendChild(clearSect);
};

const task = new Task('test', 1);
task.check();
generateClearButton();

export default class List {
  constructor() {
    this.tasks = [];
    this.clearCompleted();
  }

  add(task) {
    this.tasks.push(task);
    this.appendToDom(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  get() {
    return this.tasks;
  }

  remove(task) {
    const index = task.index - 1;
    this.tasks.splice(index, 1);
    this.updateIndex(index);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.reload();
  }

  appendToDom(task) {
    const sect = document.getElementById('list');
    const div = document.createElement('div');
    div.className = 'item';

    // create task description
    const p = document.createElement('input');
    p.value = task.description;
    p.className = 'task';
    p.type = 'text';

    // create checkbox
    const input = document.createElement('input');
    input.classList.add('checkbox');
    input.type = 'checkbox';
    input.checked = task.checked;
    input.addEventListener('change', () => {
      p.blur();
      this.tasks[this.tasks.indexOf(task)].check();
      p.classList.toggle('checked');
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    });

    div.appendChild(input);
    div.appendChild(p);

    // create drag button
    const ellipse = document.createElement('i');
    ellipse.className = 'fa-solid fa-ellipsis-vertical';
    ellipse.classList.add('ellipse', 'drag');
    div.appendChild(ellipse);

    // create remove button
    const rm = document.createElement('i');
    rm.className = 'fa-solid fa-trash pointer';
    rm.style.display = 'none';
    rm.classList.add('remove');
    rm.id = 'remove';
    rm.addEventListener('mousedown', () => {
      this.remove(task);
    });
    div.appendChild(rm);

    sect.appendChild(div);

    p.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && p.value !== '') {
        this.tasks[this.tasks.indexOf(task)].updateDescription(p.value);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        p.blur();
      }
    });

    p.addEventListener('blur', () => {
      ellipse.style.display = 'block';
      rm.style.display = 'none';
      div.classList.toggle('selected');
      p.classList.toggle('selected');
    });

    p.addEventListener('focus', () => {
      div.classList.toggle('selected');
      p.classList.toggle('selected');
      ellipse.style.display = 'none';
      rm.style.display = 'block';
    });

    div.addEventListener('click', () => {
      p.focus();
    });
  }

  updateIndex(start) {
    for (let i = start; i < this.tasks.length; i += 1) {
      this.tasks[i].index -= 1;
    }
  }

  reload() {
    const sect = document.getElementById('list');
    sect.innerHTML = '';
    this.tasks.forEach((task) => {
      this.appendToDom(task);
    });
  }

  reset() {
    this.tasks = [];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.reload();
  }

  clearCompleted() {
    const button = document.querySelector('.clear');
    button.addEventListener('click', () => {
      const completed = this.tasks.filter((task) => task.checked === true);
      completed.forEach((task) => {
        this.remove(task);
      });
    });
  }
}