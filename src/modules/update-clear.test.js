/**
 * @jest-environment jsdom
 */

import List from './todo-list.js';
import Task from './task.js';

document.body.innerHTML = `
<section id="list"></section>
    `;
const list = new List();
const task = new Task('test', 1);

describe('Update task', () => {
  test('Update task description', () => {
    list.add(task);
    const newDescription = 'new test';
    list.tasks[0].updateDescription(newDescription);
    localStorage.setItem('tasks', JSON.stringify(list.tasks));
    expect(list.tasks[0].description).toBe(newDescription);
  });

  test('Task is updated in local storage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0].description).toBe('new test');
  });
});

describe('Check task', () => {
  test('check by default', () => {
    expect(list.tasks[0].checked).toBeFalsy();
  })

  test('check', () => {
    list.tasks[0].check();
    localStorage.setItem('tasks', JSON.stringify(list.tasks));
    expect(list.tasks[0].checked).toBeTruthy();
  })

  test('check in local storage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0].checked).toBeTruthy();
  });
})

describe('clear check', () => {
  test('clear completed task', () => {
    list.add(new Task('task', 2));
    list.add(new Task('task', 3));
    list.clearCompleted();
    expect(list.tasks.length).toBe(2);
  })

  test('clear completed task from local storage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks.length).toBe(2);
  });
})
