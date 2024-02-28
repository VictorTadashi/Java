const prompt = require('prompt-sync')()

function getUserInfo(){
   let peso = prompt("Digite seu peso: ")
    let altura = prompt("Digite sua altura: ")

    return {
        pesoDoUsuario: peso,
        alturaDoUsuario: altura
    }
}

function calcImc(pesoInformado=0, alturaInformado=0){
    return pesoInformado/alturaInformado**2
}

function main(){
    let userData = getUserInfo();
    let peso = userData.pesoDoUsuario
    let altura = userData.alturaDoUsuario
    let resultado = calcImc(peso,altura)
    if(resultado < 18){
    console.log(`Seu IMC é ${resultado} voce esta abaixo do peso`)}
    else if(resultado > 18 && resultado < 23.9){
        console.log(`Seu IMC é ${resultado} voce esta normal`) }
   
}

main()