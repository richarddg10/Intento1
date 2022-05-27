/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';

const sizeMatriz: number = 100;

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(80);
  };

  p.fill(255);
  matriz.forEach((col, i) => {
    col.forEach((_fil, j) => {
      p.rect(i * sizeMatriz, j * sizeMatriz, sizeMatriz, sizeMatriz);
    });
  });
};

matriz: Array<Array<number>> = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

// eslint-disable-next-line new-cap
export default new p5(sketch);
