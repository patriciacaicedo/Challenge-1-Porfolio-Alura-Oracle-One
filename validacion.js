document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav'); // Seleccionar el contenedor del menú
    const menuList = document.querySelector('.menu__list');

    // Función para abrir/cerrar el menú al hacer clic en el icono de menú
    menuToggle.addEventListener('click', function () {
        // Toggle para mostrar/ocultar el menú completo al hacer clic en el icono de menú
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });

    // Función para gestionar la visualización del menú y el icono basado en el ancho de la pantalla
    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 1339px)").matches) {
            // Pantalla de 900px o menos: ocultar menú completo y mostrar solo el icono
            menuNav.style.display = 'none';
            menuToggle.style.display = 'flex'; // Mostrar icono de menú
        } else {
            // Pantalla mayor a 900px: mostrar menú completo y ocultar el icono
            menuNav.style.display = 'flex';
            menuToggle.style.display = 'none'; // Ocultar icono de menú
        }
    }

    // Ejecutar la función al cargar la página y cada vez que cambie el tamaño de la pantalla
    toggleMenuDisplay(); // Ejecutar al cargar la página

    window.addEventListener('resize', toggleMenuDisplay); // Ejecutar al cambiar el tamaño de la pantalla
});



function toggleMenu() {
    var menuNav = document.getElementById("menuNav");
    if (menuNav.style.display === "block") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "block";
    }
}


// Definimos una función para cambiar la posición de las imágenes
function alternarPosiciones() {
    const boxes = document.querySelectorAll('.experience__box');

    boxes.forEach((box, index) => {
        if (index > 0 && index % 2 !== 0) {
            // Índice impar (excepto el primero): invertir disposición
            box.style.flexDirection = 'row-reverse';
            box.querySelector('.experience__img').style.marginRight = '0';
            box.querySelector('.experience__info-container').style.textAlign = 'right';
        }
    });
}

// Llamamos a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    alternarPosiciones();
});

// Definimos una función para configurar los estilos de los contenedores de experiencia
function configurarEstilosInfoContainers() {
    const infoContainers = document.querySelectorAll('.experience__info-container');

    infoContainers.forEach(container => {
        container.style.textAlign = 'left'; // Siempre alinear el contenido a la izquierda
        container.style.width = '368px'; // Ancho fijo para el contenedor
        container.style.height = '112px'; // Altura fija para el contenedor
    });
}

// Llamamos a la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    configurarEstilosInfoContainers();
});
