function verificarListaVazia(){
    const mensagemListaVazia = document.querySelector('.menssagem-lista-vazia');
function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    if(itensDaLista.length === 0){
        mensagemListaVazia.style.display = 'block';
    }else{
        mensagemListaVazia.style.display = 'none';
    }
}
}
export default verificarListaVazia;