'use strict'

// estas son las variables creadas 

const correctCountElement = document.getElementById('correctCount');
const wrongCountElement = document.getElementById('wrongCount');
const colorCodeElement = document.getElementById('colorCode');
const colorOptionsElement = document.getElementById('colorOptions');

let correctColor;
let correctCount = 0;
let wrongCount = 0;

// con esta funcion es la que genera los colores aleatorios hasta 256 colores
function getRandomColor() {
  return Math.floor(Math.random() * 256);
}


function generateRandomColor() {
  const red = getRandomColor();
  const green = getRandomColor();
  const blue = getRandomColor();
  correctColor = [red, green, blue,];
  colorCodeElement.textContent = `RGB(${red}, ${green}, ${blue})`;
  colorCodeElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// este for es el que hace que las variaciones de color sean parecidas a la del color rgb de arriba
//ajusta los colores al rojo verde y azul y le suma un valor aleatorio
//y el math.min y max hace que los valores de verdad se manejen en ese rango para hacer la variacion

  const variations = [];
  for (let i = 0; i < 11; i++) {
    const adjustedColor = [
      Math.min(255, Math.max(0, red + getRandomNumber(-25, 25))),
      Math.min(255, Math.max(0, green + getRandomNumber(-25, 25))),
      Math.min(255, Math.max(0, blue + getRandomNumber(-25, 25)))
      
    ];
    variations.push(adjustedColor);
  }

  
  variations.push(correctColor);

  return variations;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// este es como si barajamos los colores para que cambien esto lo hace el shufflecolors
function shuffleColors(colors) {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }
}
// esto hace que los colores nos den mas opciones y lo que aprendimos de innerHtml en clase
function renderColors() {
  colorOptionsElement.innerHTML = '';
  const variations = generateRandomColor(); 
  shuffleColors(variations);

  variations.forEach(color => {
    const colorOption = document.createElement('button');
    colorOption.className = 'color-option';
    colorOption.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    colorOption.addEventListener('click', () => checkAnswer(color));
    colorOptionsElement.appendChild(colorOption);
  });
}

function checkAnswer(color) {
  if (
    color[0] === correctColor[0] &&
    color[1] === correctColor[1] &&
    color[2] === correctColor[2]
    
  ) {
    correctCount++;
  } else {
    wrongCount++;
  }

  correctCountElement.textContent = correctCount.toString();
  wrongCountElement.textContent = wrongCount.toString();

  // este alert es el que deberiamos cambiar por una animacion a ver como lo hacemos 🤔

  // DANIELA - hice algunos cambios para el mensaje de ganar o perder, aun hay que ajustar graficas.
// Juanjo. Hice una correcion con un setTimeOut porque fue la unica manera que encontre que se mostrara el numero 3 
// con esos 300 milisegundos da margen que se vea el 3
  if (correctCount >= 3) {
    setTimeout(() => {
      showMessage('./assets/try_again.png');
      resetGame();
    }, 300); 
  } else if (wrongCount >= 3) {
    setTimeout(() => {
      showMessage('./assets/try_again.png');
      resetGame();
    }, 300); 
  } else {
    renderColors();
  }
}
function showMessage(imageSrc,width ='30%', height='40%', reset = true) {
  const image = document.createElement('img');
  image.src = imageSrc;
  image.style.position = 'fixed';
  image.style.top = '50%';
  image.style.left = '50%';
  image.style.transform = 'translate(-50%, -50%)';
  image.style.width = width;
  image.style.height = height;
  document.body.appendChild(image);

  setTimeout(() => {
    document.body.removeChild(image);
    if (reset) {
      resetGame();
    } else {
      renderColors();
    }
  }, 1000); 
}

function resetGame() {
  correctCount = 0;
  wrongCount = 0;
  correctCountElement.textContent = '0';
  wrongCountElement.textContent = '0';
  renderColors();
}

resetGame();