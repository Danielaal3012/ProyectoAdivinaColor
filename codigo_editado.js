'use strict'
//buenas compañeros aqui les envio el codigo y ya vemos entre todos como mejorarlo.
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
// 
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
    const colorOption = document.createElement('img');
    colorOption.className = 'color-option';
    colorOption.src = 'data:image/svg+xml,' + encodeURIComponent(svgString(color));
    colorOption.addEventListener('click', () => checkAnswer(color));
    colorOptionsElement.appendChild(colorOption);
  });
}

// Función para convertir el SVG en cadena
function svgString(color) {
  return `<svg viewBox="212.7426 109.8873 374.4909 380.2146" width="374.491px" height="380.215px" xmlns="http://www.w3.org/2000/svg">
    <path fill="rgb(${color[0]}, ${color[1]}, ${color[2]})" d="M429.253,488.985a602.606,602.606,0,0,0,63.842-2.894l.054.658c-4.366.415-8.734.8-13.1,1.253-13.479,1.411-27.013,1.721-40.544,2.071a124.274,124.274,0,0,1-29.707-2.945c-11.644-2.529-23.524-3.356-35.343-4.642-22.7-2.469-45.215-6.038-67.247-12.192-1.735-.485-3.741-.769-5.141-1.581-3.472-2.014-7.478-2.862-10.72-5.417-1.726-1.359-4.206-1.6-5.994-3.261-4.852-4.5-10.869-7.189-16.546-10.436-8.756-5.008-17.672-10.123-24.029-18.09-11.415-14.306-21.516-29.572-27.192-47.167-5.874-18.208-6.6-36.6-1.105-55.234,2.365-8.024,4.17-16.146,8.674-23.336a98.8,98.8,0,0,1,7.911-10.5c3.355-4.043,6.109-8.532,10.131-12.089,5.565-4.923,11.139-9.772,17.166-14.155,6.33-4.6,8.575-11.606,10.014-19.033,1.779-9.177,2.543-18.534,5.17-27.564,7.346-25.251,21.888-45.089,43.539-60.1,10.929-7.578,22.51-13.984,33.835-20.846,10.632-6.442,21.785-12.057,32.353-18.565,23.88-14.7,49.548-14.879,75.875-10.632,11.687,1.886,22.762,6.012,33.721,10.475,11.97,4.874,24.135,9.24,35.09,16.321,19.7,12.737,35.182,29.073,44.374,50.968,4.427,10.543,8.841,21.094,11,32.371a94.877,94.877,0,0,1,.769,33.492c-2.229,13.6-6.288,26.791-8.619,40.359a44.805,44.805,0,0,0-.6,7.857c.036,6.951-.894,13.91-.187,20.844.856,8.388,2.183,16.729,3.018,25.118a183.816,183.816,0,0,1-.465,38.521,217.581,217.581,0,0,1-7.038,35.617,88.859,88.859,0,0,1-8.259,19.987c-1.692,2.948-2.438,6.95-6.308,8.376-6.538,10.883-17.79,15.755-28.01,21.929-4.48,2.706-9.446,4.4-14.147,6.617-3.829,1.805-7.818,1.7-11.691,2.494-10.565,2.174-21.357,2.754-32.1,3.593C457.589,488.332,443.441,488.677,429.253,488.985ZM293.377,373.965c10.57-6.9,21.6-13.132,31.571-22.231C312.935,357.282,295.346,369.589,293.377,373.965Zm41.707-44.71-.875-1.1c-8.317,6.253-16.637,12.5-24.012,19.943C319.332,342.886,327,335.8,335.084,329.255ZM324.849,229.01c6.858-8.254,15.317-15.031,21.726-23.646A90.748,90.748,0,0,0,324.849,229.01Zm-64.37,82.378c3.894-1.022,13.08-12.573,13.8-17.309C268.743,299.529,265.03,305.8,260.479,311.388Zm41.707-44.71-.875-1.1c-8.317,6.253-16.637,12.5-24.012,19.943C319.332,342.886,327,335.8,335.084,329.255ZM324.849,229.01c6.858-8.254,15.317-15.031,21.726-23.646A90.748,90.748,0,0,0,324.849,229.01ZM310.742,340.459c6.251-4.769,12.714-9.288,18.114-15.061C322.42,329.948,316.1,334.637,310.742,340.459Zm81.713-217.335a96.4,96.4,0,0,1,12.334-4.882c4.145-1.293,8.383-2.288,12.58-3.413C408,115.359,396.793,119.126,392.455,123.124Zm1.434,45.724c-6.676,2.255-18.956,10.267-20.517,13.392,3.634-2.358,7.059-4.418,10.3-6.732C387,173.136,390.536,171.1,393.889,168.848ZM318.615,371.571l.383.625c5.051-1.607,8.991-5.026,13.122-8.134l-.369-.6ZM457.457,266.729,441.2,276.646q.18.292.359.585A71.265,71.265,0,0,0,457.457,266.729Zm-8.235,17.958c3.177-.38,13-6.719,15.027-9.319Zm-126.276,38.4-.516-.668c-4,3.081-7.94,6.219-11.152,10.216Zm-30.277-36.773-8.14,11.515A28.528,28.528,0,0,0,292.669,286.312Zm-57.392,37.719,5.919-13.105A32.079,32.079,0,0,0,235.277,324.031Zm232.735-119.5-.314-.764-10.849,4.506.268.65C460.61,207.125,464.714,206.812,468.012,204.534Zm-9.488,91.446A20.249,20.249,0,0,0,467.3,291.1C463.8,291.732,461.223,294.014,458.524,295.98Zm-216.078-.237a14.662,14.662,0,0,0-5.483,5.89c-.209.372-.626.752-.135,1.164s.857.027,1.1-.336C239.452,300.232,240.945,297.984,242.446,295.743Zm82.093-107.587c2.468-2.309,5.011-4.513,6.709-7.447C328.081,182.371,326.26,185.243,324.539,188.156ZM248.856,311.707c-2.7,2.638-4.9,7.007-4.945,9.318Zm266.6,152.682-10.207,2.583A20.072,20.072,0,0,0,515.452,464.389ZM311.578,357.653a32.24,32.24,0,0,0,8.2-5.422A35.464,35.464,0,0,0,311.578,357.653ZM576.914,221.9c.216,1.827-1.164,3.829,.69,5.707C578.526,225.422,577.717,223.659,576.914,221.9ZM425.423,251.333a22.56,22.56,0,0,0,7.171-4.05A23.25,23.25,0,0,0,425.423,251.333Zm7.158,235.4v.136h8.256v-.136Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 7.105427357601002e-15)"/>
</svg>`;
}

function checkAnswer(color) {
  if (
    color[0] === correctColor[0] &&
    color[1] === correctColor[1] &&
    color[2] === correctColor[2] &&
    color[3] === correctColor[3]
    
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