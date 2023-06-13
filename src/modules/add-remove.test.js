/**
 * @jest-environment jsdom
 */

import List from './todo-list.js';

document.body.innerHTML = `
<section id="list"></section>
    `;
const list = new List();
const task = { description: 'test', index: 1 };

describe('Add task', () => {
  test('Add task to list', () => {
    list.add(task);
    expect(list.tasks).toContain(task);
  });

  test('Add task to DOM', () => {
    const div = document.querySelector('.item');
    expect(div).not.toBe(null);
  });
});
