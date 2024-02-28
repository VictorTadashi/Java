const prompt = require('prompt-sync')()

function getUserInfo(){
    let veloicdade = prompt("Diga a velociadade em km/h: ")

    return{userVelocidade: veloicdade}
}

function multaCalc(userVelocidade){
    if(userVelocidade <=60){
        return 0
    }
    else {
        return (userVelocidade - 60) * 20
    }
}

function main(){
    let userData = getUserInfo();
    let velociadade = userData.userVelocidade;
    let resultado = multaCalc(velociadade)
    console.log(`Sua multa é $${resultado}`)
}

main()