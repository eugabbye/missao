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
                afirmacao: " RESPOSTA ERRADA, SÓ EXISTE O ROSA. "
            }
        ]
    },
    {
        enunciado: "Você prefere comer... ",
        alternativas: [
            {
                texto: " Macarrão com almondegas ",
                afirmacao: " Você adora uma almondega ",
            },
            {
                texto: " Sushi ",
                afirmacao: " Você não se importa com os peixinhos do procurando nemo. "
            }
        ]
    },
    {
        enunciado: "Refletindo em vantagens  entre a energia solar e hidreelétrica ",
        alternativas: [
            {
                texto: "Acredita nos pontos positivos da energia solar",
                afirmacao: "A energia solar não polui, é renovável, limpa e silenciosa, pode ser usada em áreas isoladas da rede elétrica, necessidade mínima de manutenção, muito fácil de instalar e é barato para manter"
            },
            {
                texto: "Defende a ideia nas vantagens da energia hidreelétrica",
                afirmacao: "As principais vantagens para promover a energia hidrelétrica é a alta produção de energia dos seus projetos, por meio das barragens, e na geração elétrica sustentável por meio de uma fonte renovável, que é a água. "
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