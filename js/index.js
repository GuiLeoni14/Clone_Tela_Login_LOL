const numeroInicial = document.getElementById("number-primary");
const progresso = document.querySelector(".progresso");
const textoCentral = document.getElementById("texto-central");
const download = document.getElementById('download');
const btnInstalar = document.getElementById('instalar');
let c = 51
const tempo = document.getElementById('tempo');

btnInstalar.addEventListener('click', (event) =>{
    event.preventDefault();
    download.classList.remove('active')
})

setInterval(() => {
    let classDownload = download.getAttribute('class');
    if (((Number(numeroInicial.textContent)) <= 2800) && (classDownload == 'download')){
        numeroInicial.textContent =  ((Number(numeroInicial.textContent)) + 52.7).toFixed(1);
        c = c - 1
        tempo.textContent = `${c}:${getRandomIntInclusive(10,60)}`
        if ((Number(numeroInicial.textContent)) >= 1000){
            progresso.classList.add('meio')
        }
        if((Number(numeroInicial.textContent)) >= 2000){
            progresso.classList.add('fim')
        }
        if ((Number(numeroInicial.textContent)) >= 2800){
            textoCentral.classList.add('active');
            tempo.textContent = `${c}:00`
        }
    }
}, 1000)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min + 1)) + min;
}