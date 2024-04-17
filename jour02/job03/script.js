const button = document.getElementById('button');
const compteur = document.getElementById('compteur');
let number = 0;

function addOne() {
    number++;
    compteur.textContent = number;
}
button.addEventListener('click', addOne);
