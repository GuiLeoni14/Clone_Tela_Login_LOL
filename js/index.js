const numeroInicial = document.getElementById("number-primary");
const progresso = document.querySelector(".progresso");
const textoCentral = document.getElementById("texto-central");

setInterval(() => {
    if ((Number(numeroInicial.textContent)) <= 2800){
        numeroInicial.textContent =  ((Number(numeroInicial.textContent)) + 52.7).toFixed(1);
        if ((Number(numeroInicial.textContent)) >= 1000){
            progresso.classList.add('meio')
        }
        if((Number(numeroInicial.textContent)) >= 2000){
            progresso.classList.add('fim')
        }
        if ((Number(numeroInicial.textContent)) >= 2800){
            textoCentral.classList.add('active');
        }
    }    
    // if (Number(count.textContent) == 3){
    //     alert('limite de tempo atingido!');
    // }
}, 1000)


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max + min + 1)) + min;
// }