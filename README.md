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

### Metody uruchamiania TypeScript:

#### Uruchamianie kodu TypeScript za pomocą `tsc + node`:

1. Zainstaluj TypeScript: `npm install -g typescript`.
2. Skompiluj plik TypeScript (.ts) do JavaScript (.js): `tsc nazwa.ts`.
3. Uruchom skompilowany plik w Node.js: `node nazwa.js`.

#### Uruchamianie kodu TypeScript bezpośrednio za pomocą `ts-node`:

1. Zainstaluj TS-node: `npm install -g ts-node`.
2. Uruchom plik TypeScript bezpośrednio: `ts-node nazwa.ts`.

#### `TypeScript Playground`:

1. Otwórz TypeScript Playground: `https://www.typescriptlang.org/es/play`.
2. Wklej kod TypeScript.
3. Wynik pojawi się automatycznie w sekcji `JavaScript Output`.

#### Wybór:

- Do wydajnych aplikacji: `tsc + node` (szybsze uruchamianie i lepsza kompatybilność).
- Do szybkiego testowania: `ts-node` (brak potrzeby kompilacji, wygoda).
- Do eksperymentów i nauki: _TypeScript Playground_ (intuicyjne podglądanie zmian).
