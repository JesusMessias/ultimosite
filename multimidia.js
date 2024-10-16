document.addEventListener('DOMContentLoaded', function () {
    const menuWrapper = document.getElementById('menu-toggle-wrapper');
    
    menuWrapper.addEventListener('click', function () {
        // Alterna a classe 'active' ao clicar no menu
        menuWrapper.classList.toggle('active');
    });
});
