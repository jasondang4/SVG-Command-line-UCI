class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Must override render method');
    }
  }
  
  class Triangle extends Shape {
    constructor(color, height, width) {
      super(color);
  
      if (typeof height !== 'number' || typeof width !== 'number' || height <= 0 || width <= 0) {
        throw new Error('Height and width must be positive numbers');
      }
  
      this.height = height;
      this.width = width;
    }
  
    render() {
      // Adjusted to center the triangle in the SVG's view box
      const x1 = 150 - this.width / 2;
      const y1 = 100 + this.height / 2;
      const x2 = 150 + this.width / 2;
      const y2 = 100 + this.height / 2;
      const x3 = 150;
      const y3 = 100 - this.height / 2;
  
      return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
  
      if (typeof radius !== 'number' || radius <= 0) {
        throw new Error('Radius must be a positive number');
      }
  
      this.radius = radius;
    }
  
    render() {
      // Centered circle in the SVG's view box
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color, sideLength) {
      super(color);
  
      if (typeof sideLength !== 'number' || sideLength <= 0) {
        throw new Error('Side length must be a positive number');
      }
  
      this.sideLength = sideLength;
    }
  
    render() {
      // Centered square in the SVG's view box
      const x = 150 - this.sideLength / 2;
      const y = 100 - this.sideLength / 2;
  
      return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  