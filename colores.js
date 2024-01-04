const getRandomColor = () => Math.floor(Math.random() * 256)

const generateRandomColor = () => {
  const red = getRandomColor()
  const green = getRandomColor()
  const blue = getRandomColor()
  
  const dificultad = 10
  const variacionDificultad = (dificultad * 2) + 1
  const randomVariation = () => Math.floor(Math.random() * variacionDificultad) - dificultad

  const colorsArray = [
    `rgb(${red}, ${green}, ${blue})`,
    `rgb(${Math.max(0, Math.min(255, red + randomVariation()))}, ${Math.max(0, Math.min(255, green + randomVariation()))}, ${Math.max(0, Math.min(255, blue + randomVariation()))})`,
    `rgb(${Math.max(0, Math.min(255, red + randomVariation()))}, ${Math.max(0, Math.min(255, green + randomVariation()))}, ${Math.max(0, Math.min(255, blue + randomVariation()))})`,
    `rgb(${Math.max(0, Math.min(255, red + randomVariation()))}, ${Math.max(0, Math.min(255, green + randomVariation()))}, ${Math.max(0, Math.min(255, blue + randomVariation()))})`,
    `rgb(${Math.max(0, Math.min(255, red + randomVariation()))}, ${Math.max(0, Math.min(255, green + randomVariation()))}, ${Math.max(0, Math.min(255, blue + randomVariation()))})`
  ]

  return colorsArray
}

const colors = generateRandomColor()

console.log('Colores generados:', colors)