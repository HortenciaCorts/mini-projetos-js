//Buscando informações do Formulário(HTML)
let select = document.querySelector('select');
let textarea = document.querySelector('textarea');
let res = document.querySelector('.dados');
let numeros = [];

function adicionar(){
    let numero = Number(document.querySelector('input').value);
    console.log(numero)
    if(numero == 0 || numero > 100 || numero < 1 || numeros.indexOf(numero) != -1){
        alert('Valor inválido ou já encontrado na lista');
    }else if(numeros.indexOf(numero) == -1){
        numeros.push(numero);
        textarea.innerHTML += `Valor ${numero} adicionado. `;
    }
    numero.value = '';
    numero.focus();
    res.innerHTML = '';
}

function finalizar(){
    if(numeros.length > 0){
        let soma = 0;
        for(let i=0; i < numeros.length; i++){
            soma += numeros[i];
        }
        let media = soma / numeros.length;
        res.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados <br>
                            O maior número informado foi ${Math.max.apply(null, numeros)}... <br>
                            O menor número informado foi ${Math.min.apply(null, numeros)}... <br>
                            Somando todos os valores, temos ${soma}.<br>
                            A média dos valores digitados é ${media}.`;
    }else{
        alert('Informe os números para serem analisados')
    }
}
