/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import Bolita from './bolita';
import Matriz from './matriz';

const bolita = new Bolita(1, 4);
const matriz = new Matriz();

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(80);
    matriz.show(p);
    bolita.show(p);
  };

  p.keyPressed = () => {
    switch (p.key.toLocaleLowerCase()) {
      case 'w':
        bolita.move('UP');
        break;
      case 's':
        bolita.move('DOWN');
        break;
      case 'a':
        bolita.move('LEFT');
        break;
      case 'd':
        bolita.move('RIGHT');
        break;
      default:
        break;
    }
  };
};

// eslint-disable-next-line new-cap
export default new p5(sketch);
