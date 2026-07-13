 
let quantidadeItens =0;

 function adicionarCarrinho(nomeManga){
      quantidadeItens++;
    
  const displayContador = document.getElementById("contador");

  displayContador.innerText = `Itens: ${quantidadeItens}`;
  alert(`${nomeManga} foi adicionado ao carrinho`)
 }


 document.addEventListener('DOMContentLoaded', () => {
    const novlan = document.querySelectorAll('.lancamentos');
    if (novlan.length === 0) return;

    let indiceAtual = 0;

    setInterval(() => {
        novlan[indiceAtual].classList.remove('active');
        indiceAtual = (indiceAtual + 1) % novlan.length;
        novlan[indiceAtual].classList.add('active');
    }, 4000);
});