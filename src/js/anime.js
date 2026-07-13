document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('temporadasFrieren');
    const cards = document.querySelectorAll('.episocont');

    function aplicarFiltro(tipoSelecionado) {
        episodios.forEach(episodios => {
            if (episodios.dataset.tipo === tipoSelecionado) {
                episodios.classList.add('mostrar');
            } else {
                episodios.classList.remove('mostrar');
            }
        });
    }

    
    aplicarFiltro(select.value);

    
    select.addEventListener('change', () => {
        aplicarFiltro(select.value);
    });
});