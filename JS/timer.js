const btnComeçar = document.getElementById('começar');
const btnMostrarForm = document.getElementById('modoFoco');
const timerDiv = document.getElementById('timer');
const inputsSection = document.getElementById('align-inputs');
const btnComeçar2 = document.getElementById('começar')

btnMostrarForm.addEventListener('click', () => {
    
    timerDiv.style.display = 'block'
    inputsSection.style.display = ''
    btnComeçar2.style.display = ''
})

let intervalId;  

btnComeçar.addEventListener('click', () => {
   
    clearInterval(intervalId);

    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + (parseInt(seconds.value));

    const display = document.getElementById('timer');
   
    intervalId = timer(duration, display);
});

const timer = (duration, display) => {
    let timer = duration;
    let hours, minutes, seconds;

    return setInterval(() => {
        hours = Math.floor(timer / 60 / 60);
        minutes = Math.floor(timer / 60 - (hours * 60));
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML = `${hours}:${minutes}:${seconds}`;

        timer -= 1;

        if (timer < 0) {
            display.innerHTML = 'ACABOU!!';
            clearInterval(intervalId);
        }
    }, 1000);
};
