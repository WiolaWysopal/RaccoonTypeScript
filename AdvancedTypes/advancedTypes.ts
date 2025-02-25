// 1. Mapowany typ do oznaczenia `name` jako readonly
type ReadonlyName<T> = { readonly name: T };

// 2. Wymuszenie, aby przynajmniej jedno pole było obecne w `contact`
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Keys extends any
    ? Required<Pick<T, Keys>> & Partial<Omit<T, Keys>>
    : never;

// 3. Typ dla kontaktu – `email` lub `phone` musi być obecne
type ContactInfo = RequireAtLeastOne<{ email?: string; phone?: string }, "email" | "phone">;

// 4. Typ użytkownika, gdzie `name` jest readonly, a `age` jest opcjonalne
type User = ReadonlyName<string> & {
  age?: number | undefined;
  contact: ContactInfo;
};

// 5. Typ szablonowy generujący dynamiczny opis użytkownika
type UserDescription<T extends User> = `Name: ${T["name"]}, Age: ${T["age"] extends number ? `${T["age"]}` : "unknown"}`;

// Przykład poprawnego użytkownika
const user = {
  name: "Alice",
  age: 25,
  contact: {
    email: "alice@example.com",
  },
} as const; // WAŻNE: TypeScript zapamięta teraz dokładną wartość age jako 25

// 6. Generowanie opisu użytkownika
type UserDesc = UserDescription<typeof user>; // zwróci "Name: Alice, Age: 25"

