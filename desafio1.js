const leia = require("prompt-sync")()

console.log("Bem vindo a nossa loja, hoje temos uma promoção de 22 reais por 15 reais")

function pegaDados(){
    quantlivros = leia ("Quantos livros você quer?")
    return quantlivros
}

function calcularPreco(){
    if(quantlivros >= 7){
        valor = quantlivros*15
        return valor
    }
    else {
         valor = quantlivros*22
         return valor 
    }
}

function main(){
    pegaDados()
    calcularPreco(quantlivros)
    console.log("O valor da sua compra é de R$"+valor+",00")

}

main()
