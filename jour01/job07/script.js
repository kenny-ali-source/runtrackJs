function jourTravaille(date) {
    const joursFeries2024 = [
        new Date(2024, 0, 1), // Nouvel An
        new Date(2024, 3, 1), // Fête du Travail
        new Date(2024, 4, 8), // Victoire des Alliés
        new Date(2024, 6, 14), // Fête Nationale
        new Date(2024, 7, 15), // Assomption
        new Date(2024, 10, 1), // Toussaint
        new Date(2024, 10, 11), // Armistice
        new Date(2024, 11, 25) // Noël
    ];

    const jourSemaine = date.getDay();
    const estWeekend = jourSemaine === 0 || jourSemaine === 6;
    const estFerie = joursFeries2024.some(ferie => ferie.getTime() === date.getTime());

    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    const annee = date.getFullYear();

    if (estFerie) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (estWeekend) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation de la fonction jourTravaille avec une date donnée
jourTravaille(new Date(2024, 0, 1)); // Nouvel An (1er janvier 2024)
