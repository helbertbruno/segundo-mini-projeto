const btnCor = document.getElementById("btnCor");
const btnTexto = document.getElementById("btnTexto");
const btnHora = document.getElementById("btnHora");
const titulo = document.getElementById("titulo");
const resultadoHora = document.getElementById("resultadoHora");

const cores = ["#f8c291", "#82ccdd", "#b8e994", "#f6e58d", "#ffcccc"];
let indiceCor = 0;/*array , lista de cores disponel*/

// Mudar cor de fundo
btnCor.addEventListener("click", function() {
    document.body.style.backgroundColor = cores[indiceCor];
    indiceCor++;
    if (indiceCor >= cores.length) {
        indiceCor = 0; // volta para a primeira cor
    }
});

// Mudar texto do título
btnTexto.addEventListener("click", function() {
    titulo.textContent = "Você clicou e o texto mudou!";
});

// Mostrar hora atual
btnHora.addEventListener("click", function() {
    const agora = new Date();/*cria data e hora atuais do sistema*/
    resultadoHora.textContent = "Hora atual: " + agora.toLocaleTimeString();
});
