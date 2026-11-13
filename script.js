/*
const titulo     = document.getElementById("titulo-principal");
const campoBusca = document.querySelector("#campo-busca");
const filtroArea = document.querySelector("#filtro-area");
const mensagem   = document.querySelector("#mensagem");
const lista      = document.querySelector("#lista-cursos");
const formulario = document.querySelector("#form-cadastro");
const btnTema    = document.querySelector("#btn-tema");
const btnLimpar  = document.querySelector("#btn-limpar");

function mostrarMensagem(texto, tipo = "info") {
    mensagem.textContent = texto;
    mensagem.classList.remove("mensagem--sucesso");
    mensagem.classList.remove("mensagem--erro");

    if (tipo === "sucesso") {
        mensagem.classList.add("mensagem--sucesso");
    } else if (tipo === "erro") {
        mensagem.classList.add("mensagem--erro");
    }
}

desafio 1
{
    const titulo = document.getElementById("titulo-principal");
    titulo.textContent = "Cursos do IFPB Cajazeiras";
}

desafio 2
{
    const campoBusca = document.querySelector("#campo-busca");
    console.log(campoBusca.value.trim());
}

desafio 3
{
    const titulo = document.getElementById("titulo-principal");

    titulo.classList.add("destaque");
    console.log(titulo.classList.contains("destaque"));

    titulo.classList.remove("destaque");
    console.log(titulo.classList.contains("destaque"));
}

desafio 4
{
    const btnTema = document.querySelector("#btn-tema");

    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-alternativo");
    });
}

desafio 5
{
    const formulario = document.querySelector("#form-cadastro");
    const mensagem = document.querySelector("#mensagem");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        mensagem.textContent = "Formulario recebido!";
    });
}

desafio 6
{
    const lista = document.querySelector("#lista-cursos");

    lista.addEventListener("click", (event) => {
        console.log(event.target.tagName);
        console.log(event.currentTarget.id);
    });
}

desafio 7
{
    const lista = document.querySelector("#lista-cursos");
    const card = document.querySelector(".card-curso");
    const botao = card.querySelector("button");

    lista.addEventListener("click", () => {
        console.log("lista");
    });

    card.addEventListener("click", () => {
        console.log("cartao");
    });

    botao.addEventListener("click", () => {
        console.log("botao");
    });
}

desafio 8
{
    const lista = document.querySelector("#lista-cursos");

    lista.addEventListener("click", (event) => {
        const botao = event.target.closest("button");

        if (!botao || !lista.contains(botao)) {
            return;
        }

        const card = botao.closest(".card-curso");

        if (botao.dataset.acao === "detalhes") {
            const detalhes = card.querySelector(".detalhes");
            detalhes.classList.toggle("oculto");
        }

        if (botao.dataset.acao === "remover") {
            card.remove();
        }
    });
}

desafio 9
{
    const campoBusca = document.querySelector("#campo-busca");
    const filtroArea = document.querySelector("#filtro-area");
    const btnLimpar = document.querySelector("#btn-limpar");

    function aplicarFiltros() {
        const termo = campoBusca.value.trim().toLowerCase();
        const area = filtroArea.value;

        const cards = document.querySelectorAll(".card-curso");
        let visiveis = 0;

        cards.forEach((card) => {
            const nome = card.querySelector("h2").textContent.toLowerCase();

            const combinaNome = nome.includes(termo);
            const combinaArea = area === "todos" || card.dataset.area === area;

            const mostrar = combinaNome && combinaArea;

            card.classList.toggle("oculto", !mostrar);

            if (mostrar) {
                visiveis++;
            }
        });

        mostrarMensagem(`${visiveis} curso(s) encontrado(s).`);
    }

    campoBusca.addEventListener("input", aplicarFiltros);
    filtroArea.addEventListener("change", aplicarFiltros);

    btnLimpar.addEventListener("click", () => {
        campoBusca.value = "";
        filtroArea.value = "todos";

        aplicarFiltros();
        campoBusca.focus();
    });
}

desafio 10
{
    const lista = document.querySelector("#lista-cursos");
    const formulario = document.querySelector("#form-cadastro");

    function criarBotao(texto, acao, variante) {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("botao", variante);
        botao.dataset.acao = acao;
        botao.textContent = texto;

        return botao;
    }

    function criarCard(nome, area) {
        const card = document.createElement("article");
        card.classList.add("card-curso");
        card.dataset.area = area;

        const tituloCard = document.createElement("h2");
        tituloCard.textContent = nome;

        const descricao = document.createElement("p");
        descricao.classList.add("descricao");
        descricao.textContent = "Curso cadastrado pelo formulário.";

        const detalhes = document.createElement("p");
        detalhes.classList.add("detalhes", "oculto");
        detalhes.textContent = `Área: ${area}.`;

        card.append(
            tituloCard,
            descricao,
            criarBotao("Ver detalhes", "detalhes", "botao--principal"),
            detalhes,
            criarBotao("Remover", "remover", "botao--perigo")
        );

        return card;
    }

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const campoNome = document.querySelector("#nome-curso");
        const nome = campoNome.value.trim();
        const area = document.querySelector("#area-curso").value;

        if (nome === "") {
            mostrarMensagem("Informe o nome do curso.", "erro");
            return;
        }

        lista.append(criarCard(nome, area));

        campoNome.value = "";

        mostrarMensagem(`Curso "${nome}" cadastrado!`, "sucesso");
    });
}



 Painel Interativo de Cursos - script.js (versao final do projeto)
   Organizado como na Etapa 9 do slide:
     1. Selecao   2. Funcoes auxiliares   3. Estado inicial   4. Ouvintes
*/

// 1. SELECAO DOS ELEMENTOS*/
const titulo = document.getElementById("titulo-principal");
const campoBusca = document.querySelector("#campo-busca");
const filtroArea = document.querySelector("#filtro-area");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista-cursos");
const formulario = document.querySelector("#form-cadastro");
const btnTema = document.querySelector("#btn-tema");
const btnLimpar = document.querySelector("#btn-limpar");

// 2
function mostrarMensagem(texto, tipo = "info") {
  mensagem.textContent = texto;
  mensagem.classList.remove("mensagem--sucesso");
  mensagem.classList.remove("mensagem--erro");

  if (tipo === "sucesso") {
    mensagem.classList.add("mensagem--sucesso");
  } else if (tipo === "erro") {
    mensagem.classList.add("mensagem--erro");
  }
}

// DESAFIO 4
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-alternativo");

  const ativo = document.body.classList.contains("tema-alternativo");
  mostrarMensagem(ativo ? "Destaque ativado." : "Destaque desativado.");
});

// DESAFIO 5 e 10
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const campoNome = document.querySelector("#nome-curso");
  const nome = campoNome.value.trim();
  const area = document.querySelector("#area-curso").value;

  if (nome === "") {
    mostrarMensagem("Informe o nome do curso.", "erro");
    return;
  }

  lista.append(criarCard(nome, area));
  campoNome.value = "";
  mostrarMensagem(`Curso "${nome}" cadastrado!`, "sucesso");
});

// DESAFIO 8

lista.addEventListener("click", (event) => {
  const botao = event.target.closest("button");
  if (!botao || !lista.contains(botao)) {
    return;
  }

  const card = botao.closest(".card-curso");

  if (botao.dataset.acao === "detalhes") {
    const detalhes = card.querySelector(".detalhes");
    detalhes.classList.toggle("oculto");
    card.classList.toggle("expandido");
    botao.textContent = detalhes.classList.contains("oculto")
      ? "Ver detalhes"
      : "Ocultar detalhes";
  }

  if (botao.dataset.acao === "remover") {
    const nome = card.querySelector("h2").textContent;
    card.remove();
    mostrarMensagem(`Curso "${nome}" removido.`, "sucesso");
  }
});

// DESAFIO 9
function aplicarFiltros() {
  const termo = campoBusca.value.trim().toLowerCase();
  const area = filtroArea.value;

  const cards = document.querySelectorAll(".card-curso");
  let visiveis = 0;

  cards.forEach((card) => {
    const nome = card.querySelector("h2").textContent.toLowerCase();
    const combinaNome = nome.includes(termo);
    const combinaArea = area === "todos" || card.dataset.area === area;
    const mostrar = combinaNome && combinaArea;

    card.classList.toggle("oculto", !mostrar);
    if (mostrar) {
      visiveis++;
    }
  });

  mostrarMensagem(`${visiveis} curso(s) encontrado(s).`);
}

// DESAFIO 10
function criarBotao(texto, acao, variante) {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.classList.add("botao", variante);
  botao.dataset.acao = acao;
  botao.textContent = texto;
  return botao;
}

// DESAFIO 10
function criarCard(nome, area) {
  const card = document.createElement("article");
  card.classList.add("card-curso");
  card.dataset.area = area;

  const tituloCard = document.createElement("h2");
  tituloCard.textContent = nome;

  const descricao = document.createElement("p");
  descricao.classList.add("descricao");
  descricao.textContent = "Curso cadastrado pelo formulário.";

  const detalhes = document.createElement("p");
  detalhes.classList.add("detalhes", "oculto");
  detalhes.textContent = `Área: ${area}.`;

  card.append(
    tituloCard,
    descricao,
    criarBotao("Ver detalhes", "detalhes", "botao--principal"),
    detalhes,
    criarBotao("Remover", "remover", "botao--perigo"),
  );

  return card;
}

titulo.textContent = "Cursos de Tecnologia";
mostrarMensagem("Bem-vindos ao painel!");

// DESAFIO 9
campoBusca.addEventListener("input", aplicarFiltros);
filtroArea.addEventListener("change", aplicarFiltros);

// DESAFIO 9
btnLimpar.addEventListener("click", () => {
  campoBusca.value = "";
  filtroArea.value = "todos";
  aplicarFiltros();
  campoBusca.focus();
});
