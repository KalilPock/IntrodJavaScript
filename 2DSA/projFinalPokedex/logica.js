//Selecionando os elementos HTML
const pesquisaInput = document.getElementById("pesquisa-input")
const pesquisaBotao = document.getElementById("pesquisa-botao")
const pokemonCard = document.querySelectorAll(".card")

//"Ouvindo" evento do botao
pesquisaBotao.addEventListener('click', ()=>{
    const filtroPesquisa = pesquisaInput.value.toLowerCase();

    //percorrendo os cards
    pokemonCard.forEach(card => {
        const pokemonNome = card.getAttribute('data-name').toLowerCase();

        //logica de filtragem
        if(pokemonNome.includes(filtroPesquisa)){
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
});


