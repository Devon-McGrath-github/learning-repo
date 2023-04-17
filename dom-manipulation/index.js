// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
const paragraph1 = document.createTextNode('Hey I\'m Red!');
para.appendChild(paragraph1);




// redText.classList.add('redText');
// redText.textContent = 'Hey Im red!'
// redText.style.color = 'color: red;';

// const blueText = document.createElement('h3');
// blueText.classList.add('blueText');
// blueText.textContent = 'I\'m a blue h3';


container.appendChild(content);
