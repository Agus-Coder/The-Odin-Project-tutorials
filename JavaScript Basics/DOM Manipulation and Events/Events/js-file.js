const btn = document.querySelector('#btn')
// btn.onclick = () => alert("hello world!") Este es el metodo 2, la desventaja es que solo podes tener 1 onclick

// metodo 3

btn.addEventListener('click', () => alert("hello world!")
 )