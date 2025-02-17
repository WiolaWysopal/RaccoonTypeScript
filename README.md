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

### Ustawienia kompilatora TypeScript:

Aby upewnić się, że TypeScript wykrywa brakujące typy i potencjalne błędy, projekt został skonfigurowany z użyciem rygorystycznych ustawień. Plik `tsconfig.json` zawiera opcje takie jak `strict: true` i `noImplicitAny`, które wymuszają jawne określanie typów i poprawiają jakość kodu. Dzięki temu kompilator ostrzega przed błędami, zanim kod zostanie uruchomiony.

#### Struktura pliku `tsconfig.json`:

`tsconfig.json` to plik konfiguracyjny dla TypeScript, który określa sposób kompilacji kodu. Umożliwia dostosowanie różnych opcji, takich jak wersja ECMAScript, sposób obsługi modułów, ścisłe sprawdzanie typów czy katalogi źródłowe i docelowe. 

**Kiedy tsconfig.json jest niezbędny?**
- Gdy chcemy  korzystać z kompilatora TypeScript (`tsc`) do budowania projektu.
- Jeśli chcemy, aby kompilator automatycznie sprawdzał błędy typów.
- W większych projektach, gdzie potrzebna jest organizacja kodu (np. określenie katalogów źródłowych i docelowych).
- Gdy chcemy korzystać z zaawansowanych funkcji TS, takich jak `strictNullChecks` czy `esModuleInterop`.

#### Omówienie przykładowej struktury pliku `tsconfig.json`:

```typescript
{
  "compilerOptions": 
  {
    "target": "ES6",               
    "module": "CommonJS",          
    "strict": true,                
    "noImplicitAny": true,         
    "strictNullChecks": true,      
    "outDir": "./dist",           
    "rootDir": "./src",           
    "esModuleInterop": true,       
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

- `"strict": true` – włącza wszystkie rygorystyczne sprawdzenia typów (równoważne włączeniu m.in. `noImplicitAny`, `strictNullChecks` itd.).
- `"noImplicitAny": true` – wymusza jawne deklarowanie typów.
- `"strictNullChecks": true` – zapobiega przypisywaniu `null` i `undefined` do innych typów.
- `"target": "ES6"` – określa wersję ECMAScript, do której TypeScript ma kompilować kod.
- `"module": "CommonJS"` – przydatne w środowisku Node.js.
- `"outDir": "./dist"` – określa katalog, do którego trafi skompilowany kod.
- `"rootDir": "./src"` – wskazuje katalog, w którym znajdują się pliki TypeScript.
- `"esModuleInterop": true` – ułatwia importowanie modułów CommonJS i ES6.
- `"forceConsistentCasingInFileNames": true` – zapobiega problemom z wielkością liter w nazwach plików (ważne np. w systemach plików rozróżniających wielkość liter).
- `"skipLibCheck": true` – pomija sprawdzanie plików definicji `.d.ts`, co przyspiesza kompilację.

## Typowanie statyczne w TS:

TypeScript zapewnia statyczne typowanie, które pozwala unikać błędów już na etapie kompilacji. W praktycznych zastosowaniach, takich jak zarządzanie profilami użytkowników, pomaga w poprawnym definiowaniu i walidacji danych.

Wzór typowania statycznego:

```typescript
nazwa_zmiennej: typ | null | undefined = wartość_domyslna;
```

Przykłady:

```typescript
let age: number = 25;                // liczba całkowita
let name: string | undefined;        // string lub niezainicjalizowana wartość
let accountStatus: boolean | null;   // boolean lub brak wartości (null)

```