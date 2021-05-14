function gerarTabuada() {
    let numero = document.querySelector("input").value;
    let res = document.querySelector(".resposta");
    res.innerHTML = '';
    
    for (let i = 0; i <= 10; i++) {
      let tabuada = `${numero}x${i} = ${numero * i} <br>`;
      res.innerHTML += tabuada;
    }
}
    