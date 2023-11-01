let TimerDisplay = document.querySelector('.timerDisplay')
let Stop = document.getElementById('stop');
let Start = document.getElementById('start');
let Reset = document.getElementById('reset');

let msec = 0;
let secs = 0;
let mins = 0;

let TimerId = null;

Start.addEventListener('click', function(){
    if(TimerId !== null){
        clearInterval(TimerId);
    }
    TimerId = setInterval(startTimer, 10);
});
Stop.addEventListener('click', function(){
  clearInterval(TimerId);
});

Reset.addEventListener('click', function(){
    clearInterval(TimerId)
    TimerDisplay.innerHTML = `00 :00 : 00`;
    msec = secs = mins = 0;
  });

function startTimer(){
    msec++;
    if(msec == 100){
        msec=0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

let msecString = msec<10 ? `0${msec}`:msec;
let secsString = secs<10 ? `0${secs}`:secs;
let minsString = mins<10 ? `0${mins}`:mins;

TimerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
