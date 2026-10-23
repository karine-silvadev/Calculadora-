const visor = document.getElementById("visor");
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const valor = botao.textContent;

        if (botao.id === "limpar"){
            visor.value = "";
        } else if (botao.id ==="igual") {
            try {
                const conta = visor.value.replace("÷", "/").replaceAll("x","*");
                visor.value = eval(conta);
            } catch (erro) {
                visor.value = "Erro";
            }
        }else {
            visor.value += valor;
        }
    });
});