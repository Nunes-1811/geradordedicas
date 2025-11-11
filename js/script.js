const dicas = ["Organize-se com um cronograma e defina metas claras", "Evite distrações como o celular durante os estudos", "Utilize técnicas como revisão espaçada, resolver exercícios antes de estudar um tema e ler em voz alta para melhorar a memorização.", "Mantenha um ambiente adequado, descanse, cuide da alimentação e use ferramentas como mapas mentais para facilitar a compreensão. ", "Estude em blocos de tempo curtos e faça pausas para alongar o corpo, como o pescoço, para aliviar a tensão.", "Revise o conteúdo em intervalos de tempo regulares para fixar o conhecimento a longo prazo."]
const botao = document.querySelector("#btnGerar");
const paragrafo = document.querySelector("#dica");
function gerarDica() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    paragrafo.innerText = dicas[indiceAleatorio];
}
botao.addEventListener("click", gerarDica);