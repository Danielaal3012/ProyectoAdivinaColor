// Aquí la estructura que he pensado (el closeModal no funciona). Para implementarlo en el código habría que asignar cada modal a cada clase o id del div correspondiente y hacer que se ejecute por cada contador (win/lose) que llegue a 3 puntos (dentro del delay que Juanjo propuso). Queda añadirle un estilo con CSS y extenderlo o modificar lo que haga falta. No lo desarrollo demasiado porque tenemos que ultimar los códigos

const openModalWin = document.querySelector("#openModalWin")
const openModalLose = document.querySelector("#openModalLose")
const closeModalWin = document.querySelector("#closeModalWin")
const closeModalLose = document.querySelector("#closeModalLose")
const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")

// if (contadorWin === 3 ) {
openModalWin.addEventListener('click', () => {
    modal1.showModal()
})


closeModalWin.addEventListener('click', () => {
    modal1.close() // He probado con modal.close, closeModal, cambiandolo a clase, y no sé :(
})

// if (contadorLose === 3) 
openModalLose.addEventListener('click', () => {
    modal2.showModal()
})

closeModalWin.addEventListener('click', () => {
    modal2.close() // Tampoco funciona c:
})

