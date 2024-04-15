function tri(numbers, order) {
    if (order !== 'asc' && order !== 'desc') {
        throw new Error("Le paramètre 'order' doit être 'asc' ou 'desc'.");
    }
    const compareAscendant = (a, b) => a - b;
    const compareDescendant = (a, b) => b - a;
    const compare = order === 'asc' ? compareAscendant : compareDescendant;
    return numbers.slice().sort(compare);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(tri(numbers, 'asc')); 
console.log(tri(numbers, 'desc'));
