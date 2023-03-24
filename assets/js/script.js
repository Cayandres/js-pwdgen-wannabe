const name      = prompt('Come ti chiami?');
const surname   = prompt('Quanti hanni hai?');
const favColor  = prompt('Colore Preferito?');

const output = (name + " " + surname+ ' ' + favColor)

document.getElementById('title').innerHTML = output;