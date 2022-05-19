function calcularMedia( notas ) {
    let soma = 0 ;
    for (c = 0; c <notas.length; c++){
    soma += notas [c];
    }
    media = soma / notas.length;
    return media
}
    
let media; // escopa global

function aprovacao( notas ) { 
    let media = calcularMedia( notas ); // escopo da função
    let condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Media:' + media + '- Resultado:' + condicao;

}

// Função Recursivas

function contagemRegressiva ( numero ) {
    //console.log(numero)  // apagar depois
    let proximoNumero = numero - 1;
    if(proximoNumero > 0){
        contagemRegressiva(proximoNumero)
    }

}

// ContagemRegressiva(50)

document.addEventListener ('submit', function( evento ){
    evento.preventDefault();
    //evento.stopPropagation();
    let formulario = document.getElementById('formulario-01');
    let dados = new FormData (formulario);
    let objeto = {};
    let notas = [] ;

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
        notas.push( parseInt(dados.get(key))); //adiciona itens na array
    }
    texto = aprovacao(notas)
    document.getElementById('res').innerHTML = texto;
});