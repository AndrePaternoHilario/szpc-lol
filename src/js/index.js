/*

OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente

- passo 1 = dar um jeito de pegar o elemento HTML dos botôes
- passo 2 = dar um jeito de identificar o clique do usuário
- passo 3 = desmarcar o botão anterior
- passo 4 = marcar o botão clicado como se estivesse selecionado
- passo 5 = esconder a imagem de fundo anterior
- passo 6 = fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// passo 1 = dar um jeito de pegar o elemento HTML dos botôes
const botoesCarrossel =  document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 = dar um jeito de identificar o clique do usuário
botoesCarrossel.forEach((botao, indice) => { // arrow function () => {}
    botao.addEventListener('click', () => {
        // passo 3 = desmarcar o botão anterior
        desativarBotaoSelecionado();
        
        // passo 4 = marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        
        // passo 5 = esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa'); // selecionar as 2 linhas, clicar com o botão direito,
        imagemAtiva.classList.remove('ativa');                // REFATORAR, extrair para escopo global e dar um nome para a function
        
        // passo 6 = fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
