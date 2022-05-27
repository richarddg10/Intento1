import p5 from 'p5';

const size: number = 100;

export default class Matriz {
  matriz: Array<Array<number>> = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  show(p: p5) {
    p.fill(255);
    this.matriz.forEach((col, i) => {
      col.forEach((fil, j) => {
        p.rect(i * size, j * size, size, size);
      });
    });
  }
}
