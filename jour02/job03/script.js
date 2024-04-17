const button = document.getElementById('button');
const compteur = document.getElementById('compteur');
let number = 0;

function mettreAJourCompteur() {
    number++;
    compteur.textContent = number;
}
button.addEventListener('click', mettreAJourCompteur);
