let heroi = "pokemon"
let XP = 1500
let nível = "nível"
console.log("o heroi de nome " + heroi + " está com " + XP + " pontos de vida")

switch (XP >= 0) {
    case XP <= 1000:
        nível = "Ferro"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 1001 && XP <= 2000:
        nível = "Bronze"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 2001 && XP <= 5000:
        nível = "Prata"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 5001 && XP <= 7000:
        nível = "Ouro"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 7001 && XP <= 8000:
        nível = "Platina"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 8001 && XP <= 9000:
        nível = "Ascendente"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 9001 && XP <= 10000:
        nível = "Imortal"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break
    case XP >= 10001:
        nível = "Radiante"
        console.log("o heroi de nome " + heroi + " está no nível de " + nível)
        break

}