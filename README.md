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

Asercje typów w TypeScript pozwalają wskazać kompilatorowi, jaki typ ma dana wartość, gdy nie jest on poprawnie wywnioskowany. Przydają się zwłaszcza podczas pracy z dynamicznymi danymi, na przykład odpowiedziami API zwracanymi jako `any`. W takich sytuacjach możemy użyć kilku różnych technik asercji:

- `as` – gdy chcemy jawnie określić typ obiektu zwróconego jako `any` i uniknąć błędów kompilatora.
- `as const` – gdy mamy stałe dane i chcemy, aby TypeScript traktował je jako literalne wartości zamiast bardziej ogólnych typów.
- Operator `!` (`non-null assertion`) – gdy jesteśmy pewni, że wartość nie będzie `null` ani `undefined`, ale TypeScript tego nie wie.
- `satisfies` – gdy chcemy sprawdzić zgodność obiektu z interfejsem, ale jednocześnie zachować dokładne inferencje dla jego wartości.

## Type guards:

### Predykaty typów;

Predykaty typu (`type predicates`) to specjalne zwroty w TypeScript, które pozwalają wskazać kompilatorowi, że dany obiekt ma określony typ. Najczęściej są używane w funkcjach typu `type guard`, które pomagają zawęzić typy i uniknąć błędów.

Wzór predykatu:

```typescript
parameterName is Type
```

### `Type guard`:

Funkcja `type guard` to specjalna funkcja, która sprawdza, czy podana wartość spełnia określone kryteria. Jeśli tak – zwraca `true`, jeśli nie – zwraca `false`. Dzięki niej kompilator TS wie, z jakim typem ma do czynienia i nie trzeba używać rzutowania (`as Type`). Funkcja zawsze zwraca `true/false` a jej sygnatura zawiera predykat typu (`value is Type`).

Wzór funkcji `type guard`:

```typescript
// tutaj predykatem jest 'value is Type'
function functionName(value: unknown): value is Type 
{
    return /* warunek sprawdzający typ */;
}
```

### `instanceof` a `typeof`:

#### `typeof`:

- `typeof` sprawdza typ prymitywny wartości (np. `number`, `string`, `boolean`).
- Zwraca wynik jako łańcuch znaków (`"number"`, `"string"`, `"boolean"`, itd.).
- Nie działa dla obiektów i klas – np. `typeof new Date()` zwróci tylko `"object"`, bez szczegółów.

#### `instanceof`:

- `instanceof` sprawdza, czy obiekt jest instancją określonej klasy lub jej podklasy.
- Nie działa dla typów prymitywnych, bo są one przechowywane jako wartości, a nie instancje obiektów.
- Umożliwia rozróżnienie np. `Date` i `Array`, czego `typeof` nie potrafi.

Składnia:

```typescript
// typeof

typeof zmienna === "typ";

//instanceof

zmienna instanceof Klasa;
```

### `Union` oraz `Intersection`:

- `Union` pozwala na użycie jednego z kilku typów, ale nie ich kombinacji. Przykład:
```typescript
type PaymentData = creditCard | payPal;
```

- `Intersection` oznacza, że obiekt musi spełniać wszystkie wymagane typy jednocześnie. Przykład:
```typescript
type basePayment = 
{
    amount: number;
};

//creditCard has intersection with basePayment
type creditCard = basePayment &
{
    type: "creditcard";
    cardNumber: string;
    expiryDate: string;
    cvc: string;
};
```
## Łączenie typów:

### `type aliases`:

`Type aliases` to sposób na definiowanie własnych nazw dla typów, co ułatwia czytelność kodu i jego ponowne wykorzystanie. Alias nie tworzy nowego typu, ale jest alternatywną nazwą dla istniejącego. Alias tworzymy za pomocą słowa kluczowego `type`:

```typescript
// Alias zmiennej
type ID = string | number;

// Alias obiektu
type User = 
{
  id: ID;
  name: string;
  isAdmin: boolean;
};

```

### `keyof`

`keyof` to operator, który zwraca zbiór kluczy danego typu obiektowego jako unię stringów lub symboli. Wykorzystywany jest przede wszystkim do tworzenia dynamicznych typów.

```typescript
type User = 
{
  id: number;
  name: string;
  isAdmin: boolean;
};

type UserKeys = keyof User;  // "id" | "name" | "isAdmin"

let key: UserKeys;
key = "id";       // Poprawne
key = "isAdmin";  // Poprawne
key = "email";    // Błąd – taki klucz nie istnieje

```

## Definiowanie parametrów funkcji w TypeScript

W TypeScript możemy określić, czy parametry funkcji są:

- Obowiązkowe
- Opcjonalne (`?`)
- Z domyślną wartością (`=` po nazwie typu argumentu)

Przykład konstrukcji:

```typescript
function cost(price: number, amount: number = 1, taxvalue?: number)
{
  if (taxvalue !== undefined)
        return price*amount + price*amount*taxvalue/100;
  return price*amount;
}
```

Z powyższego przykładu wynika, że:
- zmienna `price` jest obligatoryjna,
- zmienna `amount` jest domyślnie przyjmuje wartość `1`,
- zmienna `taxvalue` nie jest obowiązkowa.

## Przeciążanie funkcji w TypeScript

Przeciążanie funkcji (`function overloading`) na zdefiniowaniu kilku sygnatur funkcji, a następnie jednej implementacji, która obsługuje wszystkie przypadki.

## Typ vs Interface:

- Interfejs (`interface IUser`)

  - Może być rozszerzany (`extends`).
  - Dobrze nadaje się do struktur obiektowych, zwłaszcza w przypadku układu hierarchicznego.
  - Preferowany, gdy w przyszłości mają zostać dodane kolejne pola.

- Alias typu (`type User`)

  - Można stosować w uniach (`|`), np. `type User = IUser | null;`.
  - Bardziej elastyczny, np. może być kombinacją różnych typów (`string | number`).
  - Lepszy do manipulacji typami.

## Typy hybrydowe:

W TypeScript typy hybrydowe (ang. _hybrid types_) to struktury, które łączą cechy różnych typów, np. funkcji i obiektów jednocześnie. Są przydatne, gdy jeden obiekt powinien mieć zarówno właściwości (jak interfejs), jak i zachowywać się jak funkcja.

Przykład:

```typescript
interface HybridType 
{
  (param: ParamType): ReturnType; // Deklaracja funkcji
  property1: PropertyType1;       // Właściwość 1
  property2?: PropertyType2;      // Opcjonalna właściwość
  method(): MethodReturnType;      // Metoda
}
```

## Kostruktory TS:

Konstruktor to specjalna metoda w klasie, która jest automatycznie wywoływana podczas tworzenia obiektu, umożliwiając inicjalizację jego pól. W TypeScript konstruktor nazywa się `constructor` i może przyjmować argumenty, mieć wartości domyślne oraz korzystać z modyfikatorów dostępu (`public`, `private`, `readonly`). Możliwe jest definiowanie wielu sygnatur konstruktora (przeciążenia), ale ich implementacja musi być jedna. Konstruktor upraszcza tworzenie obiektów i zapewnia, że wszystkie wymagane dane są poprawnie zainicjalizowane.

w TS można zdefiniować wiele sygnatur konstruktorów (tzw. _constructor overloads_ - przeciążanie konstruktorów), ale można mieć tylko jedną faktyczną implementację konstruktora. TypeScript pozwala na definiowanie wielu wersji sygnatur konstruktora, ale wszystkie muszą być obsłużone w jednej implementacji.

Konstruktor zawsze zwraca instancję klasy.

Przykład:
```typescript
    constructor(name: string, surname: string);
    constructor(name: string, surname: string, email?: string);
    constructor(name: string, surname: string, email?: string, phoneNumber?: string);
    
    constructor(name: string, surname: string, email?: string, phoneNumber?: string)
    {
        this.name = name;
        this.surname = surname;
        this.email = email ?? "EMAIL UNAVAILABLE";
        this.phoneNumber = phoneNumber ?? "PHONE UNAVAILABLE";
    };
```

## Modyfikatory dostępu, klasy abstrakcyjne, nadpisywanie metod:

**Modyfikatory** dostępu to mechanizm kontroli widoczności składników klasy (pól, metod, konstruktorów) w TypeScript. Pozwalają one na enkapsulację (ukrywanie wewnętrznych danych klasy i kontrolowanie dostępu do nich) danych i ograniczenie niepożądanego dostępu do wewnętrznych elementów obiektów. Dostępne są trzy modyfikatory: 
- `public` (domyślny, dostęp wszędzie), 
- `private` (dostępny tylko w obrębie tej samej klasy),
- `protected` (dostępny w klasie i jej podklasach). 

**Klasy abstrakcyjne** to klasy, które nie mogą być bezpośrednio instancjonowane i służą jako wzorce dla innych klas (`abstract class`). Mogą zawierać zarówno implementacje metod, jak i metody abstrakcyjne (bez implementacji), które muszą zostać nadpisane w klasach pochodnych. Dzięki temu zapewniają jednolitą strukturę dla klas dziedziczących i wymuszają implementację kluczowych funkcji.

**Nadpisywanie metod** (ang. _method overriding_) to mechanizm w programowaniu obiektowym, który pozwala klasie pochodnej na dostarczenie własnej implementacji metody zdefiniowanej w klasie bazowej. W TypeScript nadpisana metoda musi mieć taką samą sygnaturę jak oryginalna, a jeśli klasa bazowa oznaczyła metodę jako `abstract`, to klasa dziedzicząca musi ją zaimplementować. Pozwala to na dostosowanie zachowania klasy do specyficznych potrzeb.

## Dziedziczenie vs Polimorfizm

**Dziedziczenie** to mechanizm, który pozwala jednej klasie (klasie pochodnej) przejąć właściwości i metody innej klasy (klasy bazowej). Dzięki temu możemy ponownie używać kodu i unikać jego powielania.

Przykład:

```typescript
abstract class Shape
{
    private name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
    abstract logGeometric(): void;
}

// Circle dziedziczy po Shape!
class Circle extends Shape
{
    private radius: number = 0.0;

    constructor (name: string, radius: number)
    {
        super(name);
        this.radius = radius;
    }
    
    calculateArea(): number 
    {
        return parseFloat((Math.PI*this.radius**2).toFixed(2));
    }

    calculatePerimeter(): number
    {
        return parseFloat((2*Math.PI*this.radius).toFixed(2));
    }  

    logGeometric(): void 
    {
        console.log(`Name: ${this.getName()}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}
```

Polimorfizm oznacza, że różne klasy mogą implementować te same metody na różne sposoby. W praktyce oznacza to możliwość nadpisywania metod klasy bazowej w klasie pochodnej.

Przykład:

```typescript
abstract class Shape
{
    private name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
    abstract logGeometric(): void;
}

class Circle extends Shape
{
    private radius: number = 0.0;

    constructor (name: string, radius: number)
    {
        super(name);
        this.radius = radius;
    }
    
    // Circle zawiera własne implementacje metod abstrakcyjnych
    calculateArea(): number 
    {
        return parseFloat((Math.PI*this.radius**2).toFixed(2));
    }

    calculatePerimeter(): number
    {
        return parseFloat((2*Math.PI*this.radius).toFixed(2));
    }  

    logGeometric(): void 
    {
        console.log(`Name: ${this.getName()}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }
}
```

## Generyki i ograniczenia:

### Generyki:

Generyki to sposób na pisanie uniwersalnego kodu, który może działać z różnymi typami danych. Zamiast pisać osobne wersje tej samej funkcji czy klasy dla różnych typów (np. `int`, `double`, `String`), można użyć jednego rozwiązania, które dostosuje się do potrzeb.

Generyki pozwalają na używanie symboli zastępczych (np. `T`), które potem są zamieniane na konkretne typy podczas użycia kodu. Przykład:

```typescript
class/function/interface NazwaKlasy<T> 
{  
    // Ciało klasy (pola, konstruktory, metody)  
}
```

### Ograniczenia:

`Constraints` (ograniczenia) w generykach pozwalają określić, jakie typy mogą być używane jako argumenty generyczne. Dzięki nim można uniknąć błędów i korzystać z określonych właściwości na obiektach.

#### Działanie:

Kiedy używamy generyka `T`, TypeScript domyślnie pozwala na dowolny typ. Jeśli jednak chcemy wymusić, aby `T` spełniał określone warunki (np. był liczbą, stringiem lub obiektem z określonymi właściwościami), możemy użyć słowa kluczowego `extends`.

Przykład:

```typescript
function wyswietlLiczbe<T extends number>(element: T): void 
{
    console.log(element);
}

// Poprawne
wyswietlLiczbe(42);  

// Błąd! TypeScript nie pozwoli użyć stringa
// wyswietlLiczbe("Hello"); ❌

```