// Concepto puro
type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    existencias: number;
};

const catalogo: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 999, disponible: true, existencias:10 },
    { id: 2, nombre: "Mouse", precio: 25, disponible: true, existencias:10 },
    { id: 3, nombre: "Monitor", precio: 350, disponible: false, existencias:10 },
    { id: 4, nombre: "Teclado", precio: 75, disponible: true, existencias:10 },
    { id: 5, nombre: "Audífonos", precio: 100, disponible: true, existencias:10 },    

];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
    p.precio < min.precio ? p : min
);
const cuartoProducto: Producto | undefined = catalogo.find((p) => p.id === 4);

console.log(catalogo)
console.log(nombres);                  // ["Laptop", "Mouse", "Monitor"]
console.log(masBarato?.nombre);       // "Mouse"
console.log(disponibles.length);      // 2
console.log("El cuarto producto es:")
console.log(cuartoProducto)


