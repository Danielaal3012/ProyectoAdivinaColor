# ProyectoAdivinaColor
Realizado por Daniela Alvarez, Jorge Lehman, Juan José Ayuso, Jorge Ortega y Jorge Martín.
Este proyecto consiste en un juego interactivo desarrollado con HTML, CSS y JavaScript. El objetivo es adivinar el color correcto según su representación en formato RGB. Aquí hay un resumen de los archivos y funcionalidades clave:
Archivos Principales:

    index.html:
        Estructura HTML básica con etiquetas para encabezado, cuerpo y pie de página.
        Incluye elementos para mostrar el nivel, aciertos, fallos y los colores para adivinar.
        Enlaces a archivos externos de estilo (style.css) y script (codigo.js).

    style.css:
        Estilos para la apariencia y diseño del juego.
        Contiene reglas para animaciones y disposición de elementos.

    codigo.js:
        Lógica principal del juego implementada en JavaScript.
        Genera colores aleatorios, maneja la lógica de aciertos y fallos, y gestiona el progreso del jugador.
        Incluye la funcionalidad de reiniciar el juego y mostrar un modal de derrota.

Funcionalidades Clave:

    Generación de Colores:
        Se generan colores aleatorios en formato RGB que el jugador debe adivinar.

    Interfaz Gráfica:
        Muestra el nivel actual, contador de aciertos y fallos.
        Proporciona opciones de colores para que el jugador elija la correcta.

    Niveles y Progresión:
        El jugador avanza de nivel tras acumular cierto número de aciertos.
        El juego reinicia el nivel si se acumulan tres fallos.

    Modal de Derrota:
        Se muestra un modal si el jugador acumula tres fallos, ofreciendo la opción de intentarlo nuevamente.

    Responsive Design:
        La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla.

    Comentarios:
        Se incluyen comentarios en el código para explicar su funcionalidad y proporcionar información adicional.

Instrucciones de Uso:

    Abre el archivo index.html en un navegador web.
    Adivina el color correcto seleccionando una opción de la paleta.
    Avanza de nivel al acumular tres aciertos o reinicia el nivel tras tres fallos.

Requisitos y Notas:

    El proyecto utiliza tecnologías web estándar (HTML, CSS, JavaScript).
    Algunas secciones del código contienen comentarios informativos y aclaraciones.
    
Desarrollo del Proyecto:

    Durante el desarrollo de este proyecto, se enfrentaron desafíos significativos al implementar las funciones modales. Inicialmente, se encontró dificultad para hacer que estas funciones operaran correctamente, y su         comportamiento no respondía como se esperaba.

    La complicación principal se centró en la integración de eventos para activar las modales, específicamente la modal de derrota. Después de diversos intentos y ajustes, se llegó a la conclusión de que la solución residía en la implementación del evento onclick. Esta elección permitió la activación de la modal de derrota después de cierto tiempo transcurrido y la ejecución de otras acciones previas.

    A pesar de la complejidad inicial, el equipo logró superar los obstáculos al optar por un enfoque de resolución más directo con el evento onclick. Esta solución proporcionó la funcionalidad deseada y mejoró la experiencia del usuario al presentar la modal de derrota de manera efectiva.

Referencias:

    Enlace al repositorio del proyecto en GitHub se proporciona en el pie de página.

Este resumen proporciona una visión general de la estructura y funcionalidades del proyecto "Adivina el Color". Se recomienda consultar los comentarios en el código para obtener detalles adicionales sobre su implementación.
