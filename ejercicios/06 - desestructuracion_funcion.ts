export interface Producto {
  nombre: string;
  precio: number;
}

const telefono: Producto = {
  nombre: 'Nokia A1',
  precio: 150,
};

const tableta: Producto = {
  nombre: 'iPad Air',
  precio: 350,
};

export function calcularIVA(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.22];
}

const articulos = [telefono, tableta];
const [total, iva] = calcularIVA(articulos);

console.log('Total: ', total);
console.log('IVA: ', iva);
