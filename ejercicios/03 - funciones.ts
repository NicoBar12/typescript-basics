function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

const resultado = sumar(6, 7);
const resultado2 = multiplicar(6, 0, 7);

console.log(resultado, resultado2);

interface PersonajeFF {
  nombre: string;
  pv: number;
  mostrarPV: () => void;
}

function curar(personaje: PersonajeFF, curarX: number): void {
  personaje.pv += curarX;

  console.log(personaje);
}

const nuevoPersonaje = {
  nombre: 'Shinra',
  pv: 100,
  mostrarPV() {
    console.log('Puntos de Vida: ', this.pv);
  },
};

curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarPV();
