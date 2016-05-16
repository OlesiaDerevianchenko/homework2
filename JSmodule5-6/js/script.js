var body = document.body;

var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');



var mil = document.querySelector('.milis');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');
var hours = document.querySelector('.hours');
var flag = false;


// смена кнопки старт-стоп
function displayStopButton() {
  start.style.display = 'none';
  stop.style.display = 'block';
}

function displayStartButton() {
  start.style.display = 'block';
  stop.style.display = 'none';
}


// начальное время
function startStopwatch() {
  flag = true;
 initialDate = new Date;
}


// расчет времени
function getTime() {

  var currentDate = new Date;
  timer = new Date (currentDate - initialDate);
  
  milliseconds = timer.getMilliseconds();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getUTCHours();

  if(milliseconds < 100){
    milliseconds = '0' + milliseconds;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  if (minutes < 10){
    minutes = '0' + minutes;
  }
  if (hours < 10){
    hours = '0' + hours;
  }
}

// отобразить таймер в документе
function counter() {
  getTime();
  mil.innerHTML = milliseconds;
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
  hours.innerHTML = hours;
}

// интервал отображения
function displayTimer() {
  timerId = setInterval(counter, 10);
}


function stopTimer() {
  clearInterval(timerId);
  getTime();
  createTimeBlock('STOP');
  flag = false;
}


function resetTimer() {
  flag = false;
  clearInterval(timerId);
  start.style.display = 'block';
  stop.style.display = 'none';
  mil.innerHTML = '00';
  min.innerHTML = '00';
  sec.innerHTML = '00';
 }

start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayStopButton);
start.addEventListener('click', displayTimer);

stop.addEventListener('click', stopTimer)
stop.addEventListener('click', displayStartButton);

reset.addEventListener('click', resetTimer);