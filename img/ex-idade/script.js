function verificar(){
    //Buscando a data do computador
    let data = new Date();
    //Buscando os elementos do HTML
    let ano = Number(document.querySelector('input').value);
    let info = document.querySelector('.info');
    let sexo = document.getElementsByName('sexo');
    //Criando elemento no HTML -> tag img
    let img = document.createElement('img');
    //Descobrindo a idade
    let idade = data.getFullYear() - ano;
    //Descobrindo o sexo
    sexo = sexo[0].checked ? 'Homem' : 'Mulher';

    //Criança
    if(idade >= 0 || idade <= 10){
        if(sexo == 'Mulher'){
            //Adiciona na tag img o caminho da imagem
            img.setAttribute('src', './img/bebe-menina.png');
        }else if(sexo == 'Homem'){
            img.setAttribute('src', './img/bebe-menino.png');
        }
    }
    //Jovem
    if(idade > 10 && idade <= 22){
        if(sexo == 'Mulher'){
            img.setAttribute('src', './img/jovem-mulher.png');
        }else if(sexo == 'Homem'){
            img.setAttribute('src', './img/jovem-homem.png');
        }
    }
    //Adulto
    if(idade > 22 && idade <= 50){
        if(sexo == 'Mulher'){
            img.setAttribute('src', './img/adulto-mulher.png');
        }else if(sexo == 'Homem'){
            img.setAttribute('src', './img/adulto-homem.png');
        }
    }
    //Senhor(a)
    if(idade > 50){
        if(sexo == 'Mulher'){
            img.setAttribute('src', './img/senhora-mulher.png');
        }else if(sexo == 'Homem'){
            img.setAttribute('src', './img/senhor-homem.png');
        }
    }
    
    //Adiciona a informação do sexo e da idade
    info.innerHTML = `Detectamos ${sexo} com ${idade} anos`;
    //Adiciona a tag img como filha da tag span por sua classe info
    info.appendChild(img);
}