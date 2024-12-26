const mensagemListaCompradosVazia = document.getElementById("mensagem-lista-comprados-vazia");

export function verificarListaComprados(listaComprados) {
    if (listaComprados.childElementCount === 0) {
        mensagemListaCompradosVazia.style.display = "block";
    } else {
        mensagemListaCompradosVazia.style.display = "none";
    }
}
