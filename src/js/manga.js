
let itensNoCarrinho = 0;

function adicionarCarrinho(produto) {
    itensNoCarrinho++;
    const contador = document.getElementById('contador');
    contador.textContent = `Itens:${itensNoCarrinho}`;

    console.log(`Produto adicionado ao carrinho: ${produto}`);
}


document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('opcao');
    const cards = document.querySelectorAll('.contcard');

    function aplicarFiltro(tipoSelecionado) {
        cards.forEach(card => {
            if (card.dataset.tipo === tipoSelecionado) {
                card.classList.add('mostrar');
            } else {
                card.classList.remove('mostrar');
            }
        });
    }

    
    aplicarFiltro(select.value);

    
    select.addEventListener('change', () => {
        aplicarFiltro(select.value);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let indiceAtual = 0;

    setInterval(() => {
        slides[indiceAtual].classList.remove('active');
        indiceAtual = (indiceAtual + 1) % slides.length;
        slides[indiceAtual].classList.add('active');
    }, 4000);
});