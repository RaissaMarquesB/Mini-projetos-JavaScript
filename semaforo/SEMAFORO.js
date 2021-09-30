const yellow = document.getElementById('yellow')
const red = document.getElementById('red')
const green = document.getElementById('green')
const semaforo = document.getElementById('semaforo')
const buttons =document.getElementById('buttons')

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const turnOn = {
    'red': () => img.src = 'img/vermelho.jpg',
    'yellow': () => img.src = 'img/amarelo.jpg',
    'green': () => img.src = 'img/verde.jpg',
}

function amarelo (){
    semaforo.src = 'img/amarelo.jpg';
}
function vermelho (){
    semaforo.src = 'img/vermelho.jpg';
}
function verde (){
    semaforo.src = 'img/verde.jpg';
}


yellow.addEventListener('click', amarelo);
red.addEventListener('click', vermelho);
green.addEventListener('click', verde);

buttons.addEventListener('click', trafficLight);

