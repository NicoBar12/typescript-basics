/*

===== Codigo de TypeScript ====

*/

let habilidades: string[] = ['Bash', 'Sting', ' Healing'];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

//Constructor
const personaje: Personaje = {
  nombre: 'Shinra',
  hp: 100,
  habilidades: ['Bash', 'Sting', ' Healing'],
};

personaje.puebloNatal = 'Estacion 8';

//Imprime el objeto en forma de tabla
console.table(personaje);
