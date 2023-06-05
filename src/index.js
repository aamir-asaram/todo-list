import _ from 'lodash';
import './style.css';

const list = [
  {
    index: 1,
    description: 'This is a description',
    checked: false,
  },
  {
    index: 2,
    description: 'This is another description',
    checked: true,
  },
];

const sect = document.getElementById('list');
list.forEach((item) => {
  const div = document.createElement('div');
  div.className = 'item';
  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';
  input.checked = item.checked;
  const p = document.createElement('p');
  p.innerText = item.description;
  div.appendChild(input);
  div.appendChild(p);

  const ellipse = document.createElement('i');
  ellipse.className = 'fa-solid fa-ellipsis-vertical';
  ellipse.classList.add('ellipse');
  div.appendChild(ellipse);

  sect.appendChild(div);
});

const clearSect = document.createElement('div');
clearSect.className = 'clearSect';
const clear = document.createElement('button');
clear.innerText = 'Clear all completed';
clear.className = 'clear';
clearSect.appendChild(clear);
sect.appendChild(clearSect);

console.log('Hello, webpack!');

// document.body.appendChild(component());