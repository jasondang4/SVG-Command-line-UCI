const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (value) => {
      if (value.length <= 3) {
        return true;
      } else {
        return 'Please enter up to three characters.';
      }
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape:',
  },
];

const generateSvg = (text, textColor, shape, shapeColor) => {
    const svgWidth = 300;
    const svgHeight = 200;
    const shapeElement = shape.render(); 
  
    
    let textX = svgWidth / 2; 
    let textY; 
    
    switch (shape.constructor.name) {
      case 'Circle':
        textY = svgHeight / 2 + (shape.radius / 4); 
        break;
      case 'Triangle':
        textY = svgHeight / 2 + (shape.height / 4); 
        break;
      case 'Square':
        textY = svgHeight / 2; 
        break;
      default:
        textY = svgHeight / 2; 
        break;
    }
  
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
      <rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" fill="white"/>
      <g transform="translate(${svgWidth / 2}, ${svgHeight / 2})">
        ${shapeElement}
        <text dominant-baseline="middle" text-anchor="middle" x="0" y="${textY - svgHeight / 2}" font-size="20" fill="${textColor}">${text}</text>
      </g>
    </svg>`;
  
    fs.writeFileSync('logo.svg', svg);
  };
  

const main = async () => {
  const answers = await prompt(questions);

  let shape;

  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle(answers.shapeColor, 100, 150);
      break;
    case 'Circle':
      shape = new Circle(answers.shapeColor, 75);
      break;
    case 'Square':
      shape = new Square(answers.shapeColor, 100);
      break;
    default:
      console.error('Invalid shape selected');
      return;
  }

  generateSvg(answers.text, answers.textColor, shape, answers.shapeColor);

  console.log('Generated logo.svg');
};

main();
