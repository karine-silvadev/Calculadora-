const visor = document.getElementById("visor");
const botoes = document.querySelectorAll("button");

function limpar() {
    visor.value = "";
}

function apagar() {
    visor.value = visor.value.slice(0, -1);
}

function adicionar(valor) {
    visor.value += valor;
}

function calcular() {
    try {
        const conta = visor.value.replaceAll("÷", "/").replaceAll("×", "*");
        visor.value = eval(conta);
    } catch (erro) {
        visor.value = "Erro";
    }
}

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        if (botao.id === "limpar") {
            limpar();
        } else if (botao.id === "igual") {
            calcular();
        } else {
            adicionar(botao.textContent);
        }
    });
});

document.addEventListener("keydown", function (evento) {
    const tecla = evento.key;

    if ("0123456789.+-".includes(tecla)) {
        adicionar(tecla);
    } else if (tecla === ",") {
        adicionar(".");
    } else if (tecla === "/") {
        evento.preventDefault();
        adicionar("÷");
    } else if (tecla === "*") {
        adicionar("×");
    } else if (tecla === "Enter") {
        evento.preventDefault();
        calcular();
    } else if (tecla === "Backspace") {
        apagar();
    } else if (tecla === "Escape") {
        limpar();
    }
});

