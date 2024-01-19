const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("click", () => {
        if (window.innerWidth < 1300) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        removerPersonagemSelecionado();

        personagem.classList.add("selecionado");

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagem(personagem);

        alterarDescricaoPersonagem(personagem);
    });
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricaoPersonagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById("nomePersonagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".bannerPersonagem");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `assets/imgPersonagem/banner-${idPersonagem}.png`;
}

function removerPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
