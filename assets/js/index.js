window.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 540px)');
    const textElements = document.querySelectorAll('.tarjeta p, #destacados .card-text');

    function handleMediaQueryChange(mediaQuery) {
        if (mediaQuery.matches) {
            textElements.forEach(element => {
                element.style.display = 'none'; 
            });
        } else {
            textElements.forEach(element => {
                element.style.display = 'block'; 
            });
        }
    }

    handleMediaQueryChange(mediaQuery); 

    mediaQuery.addEventListener('change', handleMediaQueryChange); 
});