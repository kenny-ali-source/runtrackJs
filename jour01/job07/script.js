function jourTravaille(date) {
    const joursFeries2024 = [
        new Date(2024, 0, 1), 
        new Date(2024, 3, 1), 
        new Date(2024, 4, 8), 
        new Date(2024, 6, 14),
        new Date(2024, 7, 15), 
        new Date(2024, 10, 1), 
        new Date(2024, 10, 11), 
        new Date(2024, 11, 25) 
    ];

    const jourSemaine = date.getDay();
    const estWeekend = jourSemaine === 0 || jourSemaine === 6;
    const estFerie = joursFeries2024.some(ferie => ferie.getTime() === date.getTime());

    const jour = date.getDate();
    const mois = date.getMonth() + 1; 
    const annee = date.getFullYear();

    if (estFerie) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (estWeekend) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

jourTravaille(new Date(2024, 0, 1));
