// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
const node = document.createTextNode('I\'m red!');
para.appendChild(node);
para.setAttribute('style', 'color: red;')


container.appendChild(para)

const para2 = document.createElement('h3');
const node2 = document.createTextNode('I\'m a blue h3');
para2.appendChild(node2);
para2.setAttribute('style', 'color: blue;')

container.appendChild(para2)

const div = document.createElement('div');
const para3 = document.createElement('h1');
const node3 = document.createTextNode('I\'m in a div');
para3.appendChild(node3);
const para4 = document.createElement('p');
const node4 = document.createTextNode('Me Too');
para4.appendChild(node4);

div.appendChild(para3)
div.appendChild(para4)
container.appendChild(div)