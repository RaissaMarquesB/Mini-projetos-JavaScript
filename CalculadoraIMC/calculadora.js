
const resultado = document.getElementById('resultado');


//ESTRUTURA BASICA DA EXECUÇÃO DE UM CLICK
calcular.addEventListener('click', imc);

function imc(){
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        // CALCULO
        const conta = (peso/(altura*altura)).toFixed(1);

        let classificacao = "";
        if(conta < 18.5){
            classificacao ='ABAIXO DO PESO'
        }else if(conta < 25){
            classificacao ='COM PESO IDEAL. Parabéns XD' ;
        }else if(conta < 30){
            classificacao = 'LEVEMENTE ACIMA DO PESO!';
        }else if(conta < 35){
            classificacao = 'ACIMA DO PESO! :(';
        }else{
            classificacao = 'ACIMA DO PESO! :(';
        }


        
        resultado.textContent = `Seu IMC é ${conta} 
        ${classificacao}`
    }
    else{
        
        resultado.textContent = 'Preencha todos os campos! :)'
    }


}