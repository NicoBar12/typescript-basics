class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public nombreHeroe: string,
    public poder: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'NY, USA');
  }
}

const ironMan = new Heroe('Iron Man', 'Super Inteligente', 45, 'Tony Stark');

console.log(ironMan);
