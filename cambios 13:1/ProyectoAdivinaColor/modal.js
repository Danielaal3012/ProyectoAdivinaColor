document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModalWin = document.getElementById('openModalWin');
    const modalWin = document.getElementById('modal1');
    const btnCloseModalWinYes = document.getElementById('closeModalWinYes');
    const btnCloseModalWinNo = document.getElementById('closeModalWinNo');
  
    const btnOpenModalLose = document.getElementById('openModalLose');
    const modalLose = document.getElementById('modal2');
    const btnCloseModalLoseDale = document.getElementById('closeModalLoseDale');
    const btnCloseModalLoseMásTarde = document.getElementById('closeModalLoseMásTarde');
  
    // Eventos para abrir y cerrar el modal de victoria
    btnOpenModalWin.addEventListener('click', function () {
      modalWin.showModal();
    });
  
    btnCloseModalWinYes.addEventListener('click', function () {
      modalWin.close();
      // Creo que seria copiar y pegar la logica de cierre de juego,  a nosotros nos daria igual que gane o pierda
      function resetGame() {
        correctCount = 0;
        wrongCount = 0;
        correctCountElement.textContent = '0';
        wrongCountElement.textContent = '0';
        updateLevel();
        renderColors();
      }
    });
  
    btnCloseModalWinNo.addEventListener('click', function () {
      modalWin.close();
      // Pero por si acaso lo dejo de momento con el reset game que ya teníamos
      function resetGame() {
        correctCount = 0;
        wrongCount = 0;
        correctCountElement.textContent = '0';
        wrongCountElement.textContent = '0';
        updateLevel();
        renderColors();
      }
    });
  
    // Eventos para abrir y cerrar el modal de derrota
    btnOpenModalLose.addEventListener('click', function () {
      modalLose.showModal();
    });
  
    btnCloseModalLoseDale.addEventListener('click', function () {
      modalLose.close();
      function resetGame() {
        correctCount = 0;
        wrongCount = 0;
        correctCountElement.textContent = '0';
        wrongCountElement.textContent = '0';
        updateLevel();
        renderColors();
      }
    });
  
    btnCloseModalLoseMásTarde.addEventListener('click', function () {
      modalLose.close();
      // Este no se muy bien si tendría que cerrarse o no
    });
  });
  