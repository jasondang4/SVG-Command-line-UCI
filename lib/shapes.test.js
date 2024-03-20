const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Triangle', () => {
    it('should render a triangle with the correct color', () => {
      const shape = new Triangle('red');
      expect(shape.render()).toEqual('<polygon points="100,50 200,50 150,150" fill="red"/>');
    });
  });

  describe('Circle', () => {
    it('should render a circle with the correct color', () => {
      const shape = new Circle('blue');
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue"/>');
    });
  });

  describe('Square', () => {
    it('should render a square with the correct color', () => {
      const shape = new Square('green');
      expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green"/>');
    });
  });
});