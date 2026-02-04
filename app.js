function sortear() {
    let quanTidade = parseInt(document.getElementById('quantidade').value);
    let dE = parseInt(document.getElementById('de').value);
    let aTe = parseInt(document.getElementById('ate').value);

    let sorTeados = [];
    let nuMero;

    if (dE >= aTe) {

        alert("O número inserido no campo 'de' deve ser menor do que o número inserido no campo 'até'");
        
    return

    }

    if (quanTidade > (aTe - dE + 1)) {

    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    
    return;

    }

    for (let i = 0; i < quanTidade; i++) {
        nuMero = obterNumeroAleatorio(dE, aTe);

        while(sorTeados.includes(nuMero)) {
            nuMero = obterNumeroAleatorio(dE, aTe);
        }

        sorTeados.push(nuMero);

    }

    let reSultado = document.getElementById(`resultado`);
    reSultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorTeados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

function alterarStatusBotao() {
    let buTao = document.getElementById('btn-reiniciar');

    if (buTao.classList.contains(`container__botao-desabilitado`)) {
        buTao.classList.remove('container__botao-desabilitado');
        buTao.classList.add('container__botao');

    } else {
        buTao.classList.remove('container__botao');
        buTao.classList.add('container__botao-desabilitado');
        
    }

}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();

}
