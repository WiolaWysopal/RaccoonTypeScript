# Instalacja _ESLint_:

1. Otwórz terminal w katalogu projektu i wpisz polecenie:

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier
```

2. Udaj się do `VSCode > Extensions`.
3. W polu wyszukiwania wpisz _ESLint_.
4. Wybierz odpowiednie rozszerzenie i kliknij `Install`.

## Konfiguracja ESLint:

1. W katalogu projektu utwórz plik `eslint.config.js`.
2. W pliku zamieść następujący kod:

```js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParserTypescript from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      parser: eslintParserTypescript,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
```

### Sprawdzanie poprawności instalacji:

Aby upewnić się, że rozszerzenie zostało zainstalowane poprawnie, w katalogu projektu otwórz konsolę (`cmd`) i wprowadź następujące polecenie:

```
npx eslint . --ext .ts
```

Jeśli chcesz automatycznie poprawić błędy, użyj:

```
npx eslint . --ext .ts --fix
```

# Instalacja _Prettier_:

1. Udaj się do `VSCode > Extensions`.
2. W polu wyszukiwania wpisz _Prettier_.
3. Wybierz odpowiednie rozszerzenie (`Prettier - Code formatter`) i kliknij `Install`.

## Konfiguracja Prettier:

1. W katalogu projektu utwórz plik `.prettierrc.json`.
2. W pliku zamieść następujący kod:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```
### Sprawdzanie poprawności instalacji:

Aby upewnić się, że rozszerzenie zostało zainstalowane poprawnie, w katalogu projektu otwórz konsolę (`cmd`) i wprowadź następujące polecenie:

```
npx prettier --write .
```