## Kroki potrzebne aby skonfigurować Bundler:

1. Zainstaluj `esbuild` poleceniem:
```sh
npm install --save-dev esbuild
```
2. Utwórz plik `build.js` w katalogu głównym projektu.
3. W pliku build.js dodaj kod:
```js
require("esbuild").buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/bundle.js",
  platform: "browser"
});
```
4. Dodaj w `package.json` skrypt `"build": "node build.js"`.
5. Utwórz katalog projektu i umieść w nim plik `index.ts`. Przykładowy plik TS:
```typescript
const message: string = "Hello, TypeScript!";
console.log(message);
``` 
6. Uruchom bundler poleceniem:
```sh
npm run build
```
7. Załaduj plik wynikowy `bundle.js` w pliku HTML, aby przetestować działanie.

### Sprawdzenie poprawności Bundlera:

Aby sprawdzić, czy bundler działa poprawnie, należy zwrócić uwagę na następujące rzeczy:

- Brak błędów w terminalu – jeśli nie pojawiły się błędy, to `build.js` został wykonany poprawnie.
- Plik wyjściowy (`bundle.js`) został wygenerowany –  w katalogu projektu powinien pojawić się plik `bundle.js`.
- Kod w `bundle.js` powinien być skompilowany do kodu w JavaScript.
- Jeśli `bundle.js` ma być używany w przeglądarce, należy upewnić się, że nie ma błędów w konsoli deweloperskiej (`F12 > Console`).