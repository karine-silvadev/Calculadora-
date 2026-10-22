const visor = document.getElementById("visor");
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const valor = botao.textContent;

        if (botao.id === "limpar"){
            visor.value = "";
        } else if (botao.id ==="igual") {
            try {
                visor.value = eval(visor.value);
            } catch (erro) {
                visor.value = "Erro";
            }
        }else {
            visor.value += valor;
        }
    });
});