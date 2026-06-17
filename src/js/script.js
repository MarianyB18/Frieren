 
let quantidadeItens =0;

 function adicionarCarrinho(nomeManga){
      quantidadeItens++;
    
  const displayContador = document.getElementById("contador");

  displayContador.innerText = `Itens: ${quantidadeItens}`;
  alert(`${nomeManga} foi adicionado ao carrinho`)
 }


  let slideAtual = 0;

  const slides =document.querySelectorAll('.slide');

function slideShow() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideAtual++;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  slides[slideAtual].classList.add("active");

  setTimeout(slideShow, 3000);
}

slideShow();