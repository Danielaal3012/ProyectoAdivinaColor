
'use strict';

const correctCountElement = document.getElementById('correctCount');
const wrongCountElement = document.getElementById('wrongCount');
const colorCodeElement = document.getElementById('colorCode');
const colorOptionsElement = document.getElementById('colorOptions');
const levelElement = document.querySelector('.niveles');

let correctColor;
let correctCount = 0;
let wrongCount = 0;
let nivel = 1;
const subirNivel = 8;

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  const red = getRandomColor();
  const green = getRandomColor();
  const blue = getRandomColor();
  correctColor = [red, green, blue];
  colorCodeElement.textContent = `RGB(${red}, ${green}, ${blue})`;
  colorCodeElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  const variations = [];
  for (let i = 0; i < subirNivel; i++) {
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

function shuffleColors(colors) {
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }
}

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
    correctCountElement.textContent = correctCount.toString();
    //Aqui separo los texContent para tener arriba los aciertos y poder hacerle lo de los niveles
    if (correctCount === 3) {
      showMessage('Avanza de nivel'); // hay que cambiar el icono que sale en showMessage.
      setTimeout(() => {
        nivel++;
        correctCount = 0;
        updateLevel();
        resetGame();
      }, 300); 
    } else {
      renderColors();
    }
  } else {
    wrongCount++;
    wrongCountElement.textContent = wrongCount.toString();

    if (wrongCount === 3) {
      showMessage('./assets/try_again.png');
      setTimeout(() => {
        resetGame();
      }, 300); 
    } else {
      renderColors();
    }
  }
}




function updateLevel() {
  levelElement.textContent = `Nivel: ${nivel}`;
}

function showMessage(imageSrc, width = '30%', height = '40%', reset = true) {
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
  updateLevel();
  renderColors();
}

// Inicia el juego al cargar la página
updateLevel();
renderColors();
