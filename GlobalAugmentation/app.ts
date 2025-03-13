export {};

declare global {
  interface Window {
    appVersion: string;
  }
}

// Dodanie właściwości do obiektu `window`
window.appVersion = "1.0.0";

console.log(window.appVersion); // Powinno wypisać "1.0.0" w konsoli przeglądarki
