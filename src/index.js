import _ from 'lodash';
import './style.css';

const list = [
  {
    description: 'This is a description',
    checked: false,
  },
  {
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