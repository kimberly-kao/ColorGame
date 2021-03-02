//Global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //volume must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 0; // in milliseconds
var strikes;
// starting time for first clue
const startingSeconds = 5;
var seconds;
var time;

//global constants
const cluePauseTime = 200; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

const countDownEl = document.getElementById("countdown");

function startGame() {

  //initialize game variable
  pattern = []; // resets array
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  strikes = 0;
  seconds = startingSeconds; // initializes countdown timer to start at 5
  time = setInterval(updateCountdown, 1000);
  // generates random sequence
  randNum(pattern);
  console.log("This is the pattern: " + pattern);

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearInterval(time);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// sound synthesis functions
// I implemented the C scale
const freqMap = {
  1: 261.6,
  2: 293.665,
  3: 329.628,
  4: 349.994,
  5: 392,
  6: 440,
  7: 494,
  8: 523,
  9: 587
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  // fixes sound bug in Chrome
    context.resume();
  // sets button image to visibile on mouse down
    document.getElementById("img" + btn).style.visibility = "visible";
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  // clears button image on mouse up
  for(let i = 1; i<10; i++){
    document.getElementById("img"+ i).style.visibility = "hidden";
  }
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// randomly generates numbers
function randNum(arr) {
  for (let i = 0; i <= 2; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1);
  }
}

// light Buttons
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    context.resume();

    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; // set delay to initial wait time
  clueHoldTime -= 150;  // decreases clueHoldTime
  seconds = (progress + 1) * startingSeconds;  // increases the count down timer by 5 seconds each time
  console.log("The clueHoldTime is now: " + clueHoldTime);
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  clearInterval(time); // stops timer
  alert("Game Over, You lost :(");
}

function winGame() {
  stopGame();
  clearInterval(time); // stops timer
  alert("Congratulations! You win!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] != btn) {
    strikes++;
    if (strikes == 3) {
      loseGame();
    } else {
      alert("Strike: " + strikes + "/3");
      clueHoldTime += 150; // makes sure the speed stays the same as the player has not passed this case
      seconds -= 5;  // makes sure the time stays the same if the player has not passed the case
      playClueSequence();
    }
  } else {
    if (guessCounter == progress) {
      if (pattern.length - 1 == guessCounter) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }

}

function updateCountdown() {
  if (seconds == 0) {
    clearInterval(time); // if the time reaches 0, stop timer and end game
    loseGame();
  }
  const minutes = 0;
  if (seconds < 10) {
    countDownEl.innerHTML = "00:0" + seconds;  // formats timer so that there is a 0 if seconds < 10 (00:05) instead of (00:5)
  } else {
    countDownEl.innerHTML = "00:" + seconds;
  }
  seconds--;
}
