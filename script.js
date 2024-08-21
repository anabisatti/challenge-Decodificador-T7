
function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}


function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


function criptografarTexto() {
    const textarea = document.querySelector('textarea');
    const textoOriginal = textarea.value;
    const textoCriptografado = criptografar(textoOriginal);

   
    const colunaDireita = document.querySelector('.coluna-direita');
    colunaDireita.innerHTML = `
        <p id="texto-criptografado">${textoCriptografado}</p>
        <button class="btn-copiar" onclick="btnCopiar()">Copiar</button>
    `;
}


function descriptografarTexto() {
    const textarea = document.querySelector('textarea');
    const textoCriptografado = textarea.value;
    const textoDescriptografado = descriptografar(textoCriptografado);

   
    const colunaDireita = document.querySelector('.coluna-direita');
    colunaDireita.innerHTML = `
        <p id="texto-criptografado">${textoDescriptografado}</p>
        <button class="btn-copiar" onclick="btnCopiar()">Copiar</button>
    `;
}


function btnCopiar() {
    const textoCriptografado = document.getElementById('texto-criptografado');

    if (textoCriptografado) {
        navigator.clipboard.writeText(textoCriptografado.textContent)
            .then(() => alert('Mensagem copiada para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar texto: ', err));
    } else {
        alert('Nenhuma mensagem para copiar!');
    }
}

document.querySelector('textarea').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-z\s]/g, '');
});