// arr: T[] - lista argumentów dowolnego typu
// value: badana wartość typu T, której pojawienia się są badane
// T extends string | number | boolean - alternatywa dla T extends Comparable; 
// Comparable nie jest domyślnie implementowane w TS!

function genericFunction<T extends string | number | boolean>(arr: T[], value: T): number 
{
    return arr.reduce((count, element) => (element === value ? count + 1 : count), 0);
}

// Przykładowe użycie:
console.log(genericFunction([1, 2, 3, 1, 1], 1)); // 3
console.log(genericFunction(["a", "b", "a", "c"], "a")); // 2
console.log(genericFunction([true, false, true, true], true)); // 3

