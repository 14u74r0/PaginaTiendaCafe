document.addEventListener('DOMContentLoaded', () => { // Asegura que el DOM esté completamente cargado
    const botonHamburguesa = document.querySelector('.botonHamburguesa'); //Seleccion de elemntos
    const navMenu = document.querySelector('.nav');
    const mainContent = document.querySelector('main'); 

    botonHamburguesa.addEventListener('click', () => { //Abrir y cerrar el menu
        navMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', (event) => {   // Cerrar el menu al hacer clic fuera de él
        const menuIsOpen = navMenu.classList.contains('is-open');
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnButton = botonHamburguesa.contains(event.target);

        if (menuIsOpen && !isClickInsideMenu && !isClickOnButton) {
            navMenu.classList.remove('is-open');
        }
    });

    if (mainContent) {    // Cerrar el menu al hacer clic en el contenido principal
        mainContent.addEventListener('click', () => {
            if (navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
            }
        });
    }
});