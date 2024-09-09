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
        enunciado: "Você costuma ler? ",
        alternativas: [
            {
                texto: " Sim ",
                afirmacao: " Você gosta de ler fanfics hots ",
            },
            {
                texto: " Não ",
                afirmacao: " Você será analfabeto "
            }
        ]
    },
    {
        enunciado: "Qual você prefere? ",
        alternativas: [
            {
                texto: " Hello Kitty ",
                afirmacao: " você é modinha, ",
            },
            {
                texto: " Cinnamoroll ",
                afirmacao: " temos mais uma prova de que você é gay. "
            }
        ]
    },
    {
        enunciado: "Qual você escolheria",
        alternativas: [
            {
                texto: " Mataria seu pior inimigo ",
                afirmacao: " Você será preso por um assasinato. ",
            },
            {
                texto: " Roubaria sua professora mais odiada ",
                afirmacao: " Você será preso por assalto em flagrante. "
            }
        ]
    },
    {
        enunciado: "Você tem medo de que?",
        alternativas: [
            {
                texto: " Ver fantasmas ",
                afirmacao: " Em 2028, você presenciou sua primeira aparição sobrenatural, ao buscar ajuda profissional, seu psicólogo te classificou como esquizofrênico.  ",
            },
            {
                texto: " Ver uma situção chocante ",
                afirmacao: " Você ficou traumatizadno em 2045 ao, após ver um seu amigo da escola, fugir do hospício por ser classificado como esquizofrênico e sair pelado correndo pela rua, falando sobre aparições fantasmagóricas. "
            }
        ]
    },
    {
        enunciado: " Quem você gosta mais? ",
        alternativas: [
            {
                texto: " Bruna ",
                afirmacao: " Você e a Bruna continuaram amigas a vida toda. ",
            },
            {
                texto: " Gabriela ",
                afirmacao: " Você e a Gabriela continuaram amigas na vida toda."
            },
            {
                texto: " Bianca ",
                afirmacao: " Você e a Bianca continuaram amigas na vida toda."
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