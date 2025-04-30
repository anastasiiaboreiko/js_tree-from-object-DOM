'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  const ulElem = document.createElement('ul');

  if (element === null) {
    ulElem.setAttribute('id', 'tree');

    const div = document.createElement('div');

    document.body.append(div);
    div.appendChild(ulElem);
  } else {
    element.appendChild(ulElem);
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    ulElem.appendChild(li);

    createTree(li, data[key]);
  }
}

createTree(tree, food);
