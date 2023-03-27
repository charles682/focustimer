



const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
// const buttonDecrease = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonFloresta = document.querySelector('.tree')
const buttonRain = document.querySelector('.rain')
const buttonCafeteira = document.querySelector('.cafeteria')
const buttonFireplace = document.querySelector('.fireplace')

const volumeRange = document.querySelector('#volume')
const volumeRain = document.querySelector('#volumeRain')
const volumeCafeteria = document.querySelector('#volumeCafeteria')
const volumeFireplace = document.querySelector('#volumeFireplace')

const tree = new Audio("./sound/Floresta.wav")
const rain = new Audio("./sound/Chuva.wav")
const cafeteria = new Audio("./sound/Cafeteria.wav")
const fireplace = new Audio("./sound/Lareira.wav")

let chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  
})

document.querySelector(".decrease").addEventListener("click", decreaseMinutes);


document.querySelector(".increase").addEventListener('click', increaseMinutes)

let minutes = Number(minutesDisplay.textContent)
let timertimeOut 
let decreaseTimer 

tree.loop = true
rain.loop = true
cafeteria.loop = true
fireplace.loop = true


function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
  updateTimerDisplay(0, 0)
  clearTimeout(timertimeOut)
}

function increaseMinutes() {
  let minutes = Number(minutesDisplay.textContent);
  if (minutes >= 0) {
    ++minutes
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
  }
}

function decreaseMinutes(){
  if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0 || minutesDisplay.textContent == 0 && secondsDisplay.textContent > 0){
    return 
  }
  let minutes = Number(minutesDisplay.textContent);
  if(minutes >= 0){
    --minutes
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }
}

function countdown(){
  timertimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0){
      resetControls()
      
      return 
    }

    if(seconds <= 0){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

  
    countdown()
  }, 1000)
}



buttonPlay.addEventListener('click', function(){
  if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0){
    return 
  }
  buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    countdown()
  
})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timertimeOut) 
})


buttonStop.addEventListener('click', function(){
  resetControls()
  resetTimer()
  
})


buttonSet.addEventListener('click', function(){
  let  newMinutes = prompt('Quantos minutos?') 
  if(!newMinutes){
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})


function toggleAudioPlay(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

 buttonFloresta.addEventListener("click", function() {
  buttonFloresta.classList.toggle('treeClicked')
  toggleAudioPlay(tree);
  rain.pause();
  cafeteria.pause();
  fireplace.pause();
  
});

buttonRain.addEventListener("click", function() {
  buttonRain.classList.toggle('rainClicked')
  toggleAudioPlay(rain);
  tree.pause();
  cafeteria.pause();
  fireplace.pause();
  
});

buttonCafeteira.addEventListener("click", function() {
  buttonCafeteira.classList.toggle('cafeteriaClicked')
  toggleAudioPlay(cafeteria);
  tree.pause();
  rain.pause();
  fireplace.pause();
 
});

buttonFireplace.addEventListener("click", function() {
  buttonFireplace.classList.toggle('fireplaceClicked')
  toggleAudioPlay(fireplace);
  tree.pause();
  rain.pause();
  cafeteria.pause();
  
});


volumeTree.addEventListener('input', () => {
  tree.volume = volumeTree.value / 100
});

volumeRain.addEventListener('input', () => {
  rain.volume = volumeRain.value / 100 
});

volumeCafeteria.addEventListener('input', () => {
  cafeteria.volume = volumeCafeteria.value / 100
});

volumeFireplace.addEventListener('input', () => {
  fireplace.volume = volumeFireplace.value / 100
});




