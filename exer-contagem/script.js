function contar(){
    let numIni = Number(document.querySelector('#inicio').value);
    let numFim = Number(document.querySelector('#fim').value);
    let numPular = Number(document.querySelector('#pular').value);
    let res = document.querySelector('.res');
    
    console.log(numIni, numFim, numPular);
    
    if(numIni == 0 || numFim == 0 || numPular == 0){
        alert('Todos os campos devem ser preenchido e devem ser maiores que 0');
    }else{
        res.innerHTML = 'Contando'
        if(numIni > numFim){
            for(let cont = numIni; cont >= numFim; cont -= numPular){
                res.innerHTML += ` -> ${cont}`;
            }
        }else{
            for(let cont = numIni; cont <= numFim; cont += numPular){
                res.innerHTML += ` -> ${cont}`;
            }
        }

    }
}