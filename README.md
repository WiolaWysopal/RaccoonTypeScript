# RaccoonTypeScript
Practical examples and experiments with TypeScript.

## Adnotacje typów w TS:

Adnotacje typów w TypeScript to sposób na określenie typu zmiennych, parametrów funkcji i wartości zwracanych przez funkcje. Pomagają w wykrywaniu błędów na etapie kompilacji i poprawiają czytelność kodu. Adnotację typu dodajemy po nazwie zmiennej lub parametru, używając dwukropka:

**Adnotacja dla zmiennych i tablic:**
```typescript
let age: number = 25;
let numbers: number[] = [1, 2, 3];
let words: string[] = ["one", "two"];
```
**Adnotacja dla funkcji:**
```typescript
function add(x: number, y: number): number 
{
    return x + y; // Funkcja zwraca liczbę
}
```
**Adnotacja dla obiektów:**
```typescript
let user: { name: string; age: number } = 
{
    name: "Alice",
    age: 30
};
```

