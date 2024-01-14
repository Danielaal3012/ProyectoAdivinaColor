'use strict';

// buen code

// // todo: modal para derrota (1 segundo después del splash) :isyo
// // todo: modal para victoria de 3
// // todo: función ejecución del splash : Listo 
// todo: sonido del splash
// todo: cambiar los adjustedColor
// todo: leer los comentarios

const correctCountElement = document.getElementById('correctCount');
const wrongCountElement = document.getElementById('wrongCount');
const colorCodeElement = document.getElementById('colorCode');
const colorOptionsElement = document.getElementById('colorOptions');
const levelElement = document.querySelector('.niveles');
// modal daniela 
// const btnOpenModalLose = document.getElementById('openModalLose');
const modalLose = document.getElementById('modal2');
const btnCloseModalLoseDale = document.getElementById('closeModalLoseDale');
const btnCloseModalLoseMásTarde = document.getElementById('closeModalLoseMásTarde');

let correctColor;
let correctCount = 0;
let wrongCount = 0;
let nivel = 1;
let subirNivel = 8;

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function isColorDark(color) {
  const [r, g, b] = color.map(component => component / 255);
  const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminosity < 0.5;
}

function generateRandomColor() {
  const red = getRandomColor();
  const green = getRandomColor();
  const blue = getRandomColor();
  correctColor = [red, green, blue];
  colorCodeElement.textContent = `RGB(${red}, ${green}, ${blue})`;
  colorCodeElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  const textColor = isColorDark([red, green, blue]) ? 'white' : 'black';
  colorCodeElement.style.color = textColor;

  const variations = [];
  for (let i = 0; i < subirNivel; i++) {
    const adjustedColor = [
      Math.min(255, Math.max(0, red + getRandomNumber(-100, 100))),
      Math.min(255, Math.max(0, green + getRandomNumber(-100, 100))),
      Math.min(255, Math.max(0, blue + getRandomNumber(-100, 100)))
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
    const svgOption = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOption.setAttribute('width', '100');
    svgOption.setAttribute('height', '100');
    svgOption.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgOption.setAttribute('viewBox', '0 0 400 300');
    svgOption.classList.add('color-option-svg');

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', 'matrix(1, 0, 0, 1, 1.6763830184936523, -27.923547744750977)');

    const st15 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    st15.setAttribute('class', 'st15');
    st15.setAttribute('d', 'M346.2,263.61c-0.77-20.62-23.16-39.43-25.4-58.37c-1.09-10.78,7.84-16.42,12.18-24.54 c12.8-26.89-20.48-57.76-42.7-74.27C230.14,64.43,134.91,33.7,71.88,50c-37.54,9.83-59.26,36.51-51.46,73.79 c24.84,86.09,160.02,158.6,250.9,174.36C309.84,304.24,348.56,294.69,346.2,263.61z M264.29,257.16 c-14.55-8.12-22.16-22.11-17.01-31.26c13.33-21.26,63.96,6.87,52.68,29.41C294.81,264.45,278.84,265.28,264.29,257.16z');
    st15.style.fill = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    st15.style.stroke = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    st15.style.strokeMiterlimit = '10';

    g.appendChild(st15);
    svgOption.appendChild(g);

    svgOption.addEventListener('click', () => checkAnswer(color));
    colorOptionsElement.appendChild(svgOption);
  });
}

function closeModalLose() {
  const modal = document.getElementById('modal2');
  modal.style.display = 'none';
  document.querySelector('.containerRelativo').style.display = 'none';
  wrongCount = 0;
  correctCount = 0;
  nivel = 1;
  correctCountElement.textContent= '0';
  wrongCountElement.textContent= '0';
  levelElement.textContent = `Nivel: ${nivel}`;
  
}

btnCloseModalLoseDale.addEventListener('click', closeModalLose);
btnCloseModalLoseMásTarde.addEventListener('click', closeModalLose);


function checkAnswer(color) {
  if (
    color[0] === correctColor[0] &&
    color[1] === correctColor[1] &&
    color[2] === correctColor[2]
  ) {
    correctCount++;
    correctCountElement.textContent = correctCount.toString();
    //Aqui separo los textContent para tener arriba los aciertos y poder hacerle lo de los niveles
    if (correctCount === 3) {
      setTimeout(() => {
        nivel++;
        correctCount = 0;
        wrongCount = 0;
        updateLevel();
      }, 300); 
    } else {
      renderColors();
    }
  } else {
    wrongCount++;
    wrongCountElement.textContent = wrongCount.toString();

    if (wrongCount === 3) {
      document.querySelector('.containerRelativo').style.display = 'block';
      document.querySelector('.containerRelativo').style.zIndex = '1';

      setTimeout(() => {
        const modal = document.getElementById('modal2');
        modal.style.display = 'block';
        modal.style.zIndex = '2';
    }, 4000);

      setTimeout(() => {
        nivel = 1;
      }, 300); 
    } else {
      renderColors();
    }
  }
}

function updateLevel() {
  levelElement.textContent = `Nivel: ${nivel}`;
  
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