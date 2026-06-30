// Concepto puro
const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;   // 255 en base 16
const binario: number = 0b1010;     // 10 en base 2
const octal: number = 0o17;         // 15 en base 8
const grande: number = 1_000_000;   // _ como separador visual (ES2021)

console.log(hexadecimal); // 255
console.log(binario);     // 10
console.log(grande);      // 1000000

// Constantes especiales de number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isFinite(1 / 0)); // false (Infinity no es finito)
console.log(Number.isNaN(0 / 0));    // true