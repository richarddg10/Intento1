import p5 from 'p5';

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const size: number = 100;

export default class Bolita {
  x: number;
  y: number;
  ancho: number;
  alto: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.ancho = 50;
    this.alto = 50;
  }

  show(p:p5) {
    p.fill(0, 255, 255);
    p.ellipse(this.x * size - 50, this.y * size - 50, this.ancho, this.alto);
  }

  move(directionMove:Direction) {
    switch (directionMove) {
      case 'UP':
        this.y -= 1;
        break;
      case 'DOWN':
        this.y += 1;
        break;
      case 'LEFT':
        this.x -= 1;
        break;
      case 'RIGHT':
        this.x += 1;
        break;
      default:
        break;
    }
  }
}
