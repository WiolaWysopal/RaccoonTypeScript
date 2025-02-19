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

## Programowanie obiektowe:

- Interfejsy tworzy się za pomocą słowa kluczowego `interface`, definiując strukturę obiektu bez implementacji.
- Klasy tworzy się za pomocą `class`, umożliwiając definiowanie pól, metod i konstruktorów.
- Enumy (_enumerations_) to typy w TypeScript, które pozwalają przypisać czytelne nazwy stałym wartościom liczbowym lub tekstowym. Tworzy się je za pomocą `enum`, definiując zestaw nazwanych wartości liczbowych lub tekstowych.

## Rozwiązywanie Problemów z `any`, `object`, `unknown`, `never`:

Aby zapewnić bezpieczeństwo typów przy pobieraniu danych z API, należy określić oczekiwany kształt zwracanego obiektu za pomocą interfejsu lub typu i stosować parsowanie danych z kontrolą błędów. Zastępowanie typu `any` bardziej precyzyjnymi typami, takimi jak `union`, `unknown` czy generyki, poprawia bezpieczeństwo kodu i czytelność. Funkcja logująca błędy, która rzuca wyjątek, powinna mieć typ `never`, co wskazuje, że nigdy nie zwraca wartości i zawsze kończy działanie przez błąd. Aby upewnić się, że zmienna `object` ma konkretny typ, można używać `type guards`, operatora `as`oraz interfejsów, co pozwala na bezpieczne sprawdzanie i przekształcanie typów w kodzie.

- `Union` pozwala określić, że zmienna może mieć jeden z kilku typów, np. `string | number`.
- `Unknown` to bezpieczniejsza alternatywa dla `any`, wymagająca sprawdzenia typu przed użyciem.
- Generyki umożliwiają tworzenie elastycznych i wielokrotnego użytku struktur, które działają z różnymi typami.
- Typ `never` oznacza wartość, która nigdy nie zostanie zwrócona, np. w funkcjach rzucających wyjątki.
- `Type guards` to techniki sprawdzania typu w czasie działania, np. `typeof` lub `instanceof`, aby poprawnie obsługiwać różne przypadki.
- Operator `as` służy do rzutowania typu, czyli informowania kompilatora, że dana wartość ma określony typ.

## Wnioskowanie typów:

Wnioskowanie typów (`type inference`) w TypeScript polega na tym, że kompilator automatycznie określa typy zmiennych, zwracanych wartości i innych elementów kodu na podstawie ich kontekstu.

Przykład:

```typescript
// Jawna deklaracja:
function add(a: number, b: number): number 
{
    return a + b;
}

// Wnioskowanie typów - funkcja na podstawie przekazanych parametrów określa zwracany typ:
function nonExpliciteAdd(a: number, b: number)
{
    return a + b;
}
```

## Rozwiązywanie problemów związanych ze zgodnością typów:

Rozważmy przykład:

```typescript
// Ogólny typ Task
interface Task 
{
    title: string;
    description: string;
    completed: boolean;
  }
  
  // Bardziej szczegółowy typ AdminTask z dodatkowymi właściwościami
  interface AdminTask extends Task 
  {
    assignedTo: string;
    priority: "low" | "medium" | "high";
  }
  
  // Przykład poprawnego przypisania
  const generalTask: Task = 
  {
    title: "Zadanie ogólne",
    description: "Opis zadania",
    completed: false,
  };
  
  const adminTask: AdminTask = 
  {
    title: "Zadanie administracyjne",
    description: "Zarządzanie systemem",
    completed: false,
    assignedTo: "Admin",
    priority: "high",
  };
  
  // Poprawne przypisanie adminTask do zmiennej typu Task (zgodność strukturalna)
  const taskAsGeneral: Task = adminTask;
  
  // Błąd: próba przypisania Task do AdminTask (brakuje assignedTo i priority)
  // const invalidAdminTask: AdminTask = generalTask; // TypeScript zgłosi błąd
  
  console.log(taskAsGeneral);
```

Na podstawie analizy powyższego programu wiadomo, że w TypeScript zgodność typów pozwala przypisywać obiekty o bardziej szczegółowej strukturze do zmiennej o bardziej ogólnym typie, jeśli spełniają wymagania tego typu. Problem pojawia się, gdy próbujemy przypisać obiekt o mniejszej liczbie właściwości do zmiennej oczekującej bardziej rozbudowanego typu.

Przykładowo, jeśli mamy typ `Task` z podstawowymi właściwościami (`title`, `description`, `completed`) i rozszerzony typ `AdminTask`, który dodatkowo zawiera `assignedTo` i `priority`, możemy przypisać `AdminTask` do zmiennej typu `Task`, ale odwrotne przypisanie spowoduje błąd.

Aby uniknąć błędów zgodności typów można:

- Używać interfejsów do określania relacji między typami.
- Wykorzystać rzutowanie (`as`) w sytuacjach, gdy istnieje pewność co do struktury danych.
- Stosować opcjonalne właściwości (`?`), aby umożliwić większą elastyczność.
- Korzystać z unii typów (`|`) w przypadkach, gdy zmienna może przyjmować różne struktury.

## Asercje typów:

Asercje typów w TypeScript pozwalają wskazać kompilatorowi, jaki typ ma dana wartość, gdy nie jest on poprawnie wywnioskowany. Jest to szczególnie przydatne, gdy pracujemy z dynamicznie generowanymi danymi, takimi jak odpowiedzi API zwracane jako any. W takich sytuacjach możemy użyć kilku różnych technik asercji:

- `as` – gdy chcemy jawnie określić typ obiektu zwróconego jako `any` i uniknąć błędów kompilatora.
- `as const` – gdy mamy stałe dane i chcemy, aby TypeScript traktował je jako literalne wartości zamiast bardziej ogólnych typów.
- Operator `!` (`non-null assertion`) – gdy jesteśmy pewni, że wartość nie będzie `null` ani `undefined`, ale TypeScript tego nie wie.
- `satisfies` – gdy chcemy sprawdzić zgodność obiektu z interfejsem, ale jednocześnie zachować dokładne inferencje dla jego wartości.