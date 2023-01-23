interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detaCancion: DetalleCancion;
}

interface DetalleCancion {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 100,
  segundo: 45,
  cancion: 'Screaming Suicide',
  detaCancion: {
    autor: 'Metallica',
    anio: 2023,
  },
};

//Desestructuracion de Objetos
const { volumen, cancion, detaCancion } = reproductor;
const { autor, anio } = detaCancion;

console.log('El volumen actual es: ', volumen);
console.log('El autor es: ', autor);
console.log('la Cancion es: ', cancion);
console.log('El anio de la cancion es: ', anio);

//Desestructuracion de Arreglos
const aot: string[] = ['Eren', 'Mikasa', 'Levi'];
const [p1, p2] = aot;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
