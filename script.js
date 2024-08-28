const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você prefere as cores... ",
        alternativas: [
            {
                texto: " Rosa ",
                afirmacao: " Você é uma pessoa boiola. "
            },
            {
                texto: "Azul",
                afirmacao: " Você ainda é boiola. "
            }
        ]
    },
    {
        enunciado: "Você prefere comer... ",
        alternativas: [
            {
                texto: " Macarrão com almondegas ",
                afirmacao: " Você adora uma almondega. ",
            },
            {
                texto: " Sushi ",
                afirmacao: " Você não se importa com os peixinhos do procurando nemo. "
            }
        ]
    },
    {
        enunciado: "Você tem seus cadernos completos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você é muito estudioso"
            },
            {
                texto: "Não",
                afirmacao: "O Prof. Ricardo ficou triste por você não completar o caderno dele."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();