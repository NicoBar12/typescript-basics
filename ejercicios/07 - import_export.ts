import { calcularIVA, Producto } from './06 - desestructuracion_funcion';

const carritoCompras: Producto[] = [
  {
    nombre: 'telefono 1',
    precio: 200,
  },
  {
    nombre: ' telefono 2',
    precio: 350,
  },
];

const [total, iva] = calcularIVA(carritoCompras);

console.log('Total: ', total);
console.log('IVA: ', iva);
