const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida apartir da luz do sol. Diante disso: ",
        alternativas: [
            {
                texto: "Você investiria em energia solar?",
                afirmacao: "Você é uma pessoa preocupada com o meio ambiente e pensa na economia ao longo prazo, bem como energia limpa e renovável."
            },
            {
                texto: "Você continua com a energia hidreelétrica?",
                afirmacao: "Você é resistente a mudanças e prefere a praticidade da energia que conhece "
            }
        ]
    },
    {
        enunciado: "Pensando em energia renovável e sustentável, e em recursos naturais inesgotáveis ",
        alternativas: [
            {
                texto: "Você pensa na energia solar como renovável e sustentável",
                afirmacao: "Esta fonte aproveita a radiação solar ou o calor para gerar eletricidade, o que a torna uma alternativa limpa e sustentável às fontes de energia convencionais que emitem poluentes atmosféricos",
            },
            {
                texto: "Acredita que a energia hidreelétrica é uma energia renovável e sustentável",
                afirmacao: " é uma energia renovável - ilimitada no tempo - porque são as suas fontes que se renovam, ou seja, rios e riachos alimentados pelo ciclo natural da água. "
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