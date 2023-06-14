/**
 * @jest-environment jsdom
 */

import Task from './task.js';
import List from './todo-list.js';

document.body.innerHTML = `
<section id="list"></section>
    `;
const list = new List();
const task = new Task('test', 1);

describe('Add task', () => {
  test('Add task to list', () => {
    list.add(task);
    expect(list.tasks).toContain(task);
  });

  test('Add task to DOM', () => {
    const div = document.querySelector('.item');
    expect(div).not.toBe(null);
  });

  test('Add task to local storage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0]).toEqual(task);
  });
});

describe('Remove task', () => {
  test('Remove task from list', () => {
    list.remove(task);
    expect(list.tasks).not.toContain(task);
  });

  test('Remove task from DOM', () => {
    const div = document.querySelector('.item');
    expect(div).toBe(null);
  });

  test('Remove task from local storage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).not.toContain(task);
  });
});
