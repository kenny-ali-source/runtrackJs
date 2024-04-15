function afficherBoiteDialogue() {
    var condition = false;
    do {
        var annee = prompt("Entrez une année sous forme YYYY :");
        if (isNaN(annee) === true || annee.length !== 4 || annee.length <= 0) {
            condition = false;
        } else {
            condition = true;
            estBisextile(annee);
        }
    } while (condition === false);
}

function estBisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
        document.getElementById('zonesaisie').innerHTML =
            "<p style='color:green;'> L'année " + annee + " : est une année bissextile</p>";
    } else {
        document.getElementById('zonesaisie').innerHTML =
            "<p style='color:red;'> L'année " + annee + " : n'est pas une année bissextile</p>";
    }
}


afficherBoiteDialogue();
