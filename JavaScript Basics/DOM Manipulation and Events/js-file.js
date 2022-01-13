const container = document.querySelector('#container');
// Seleccionamos el elemento "container", pues llegamos a el a traves de una referencia

const content = document.createElement('div');
// Creamos un nuevo div en la variable content

content.classList.add('content');
// le agregamos una clase a content

content.textContent = 'This is the glorious text content';
// y agregamos texto sobre la content 

container.appendChild(content);
// con esto le decimos "APARECE EN PANTALLA" Luego los pasos son siempre los mismos



// agregado de p rojo 

const testP = document.createElement('p')

testP.classList.add('testP')

testP.textContent = "hey! I'm red";

testP.style.color = 'red';

container.appendChild(testP)


// Agregado de h3 azul

const h3 = document.createElement('h3')

h3.classList.add('h3')

h3.textContent = "I'm a blue h3!";

h3.style.color = 'blue';

container.appendChild(h3)

// Creacion de segundo div

const newDiv = document.createElement('div');

const body = document.querySelector('body')

body.appendChild(newDiv)


const h1new = document.createElement('h1');

h1new.classList.add('h1');

h1new.textContent = "I'm in a div!";

newDiv.appendChild(h1new)
// en esta ultima parte tenes que poner el nombre de la variable const creada, o se lo que va entre parentesis despues del appenChild

newDiv.setAttribute('style', 'border: solid black; background-color: pink')

const newP = document.createElement('p')

newP.classList.add('newP')

newP.textContent = "ME TOO!"

newDiv.appendChild(newP)

