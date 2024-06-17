// 1. Wire up the buttons to the lights
// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)
// You'll have to select and store the buttons as separate variables
// then, add an event listener to each of the buttons
// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light
// Also make the lights go on and off on hover (of the light!!)
// 2. (Extra credit): Have a go at making it so that only one light can be on at one time
// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)
//imports
import { sequenceGER, sequenceNL, sequenceUK } from "./Sequences.js"
import { clearAnimation, lights, sequenceAnimation, turnOffExcept } from "./Utils.js"
import { sequenceEasy, sequenceHard } from "./game.js"

//Variables
const stopButton = document.getElementById("stop");
const cautionButton = document.getElementById("caution");
const goButton = document.getElementById("go");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const startTimerNL = document.getElementById("startTimerNL");
const startTimerGER = document.getElementById("startTimerGER");
const btnPlayEasy = document.getElementById("btnPlay");
const btnWalk = document.getElementById("btnWalk");
const pedestrian = document.getElementById("pedestrian");
const btnReset = document.getElementById("btnReset");
const btnPlayHard = document.getElementById("btnPlayHard");
const [stopLight, cautionLight, goLight] = lights;

//Turn lights on
stopButton.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept(stopLight);
});

cautionButton.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept(cautionLight);
});

goButton.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept(goLight);
});

// turn on light on hover
for (let i = 0; i < lights.length; i++) {
  lights[i].addEventListener("mouseover", (e) => {
    clearAnimation();
    turnOffExcept();
    lights[i].classList.add("on");
  });
  lights[i].addEventListener("mouseout", (e) => {
    lights[i].classList.remove("on");
  });
}

// timer UK
startTimer.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
  sequenceAnimation(sequenceUK);
});

stopTimer.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
});

// //timer NL
startTimerNL.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
  sequenceAnimation(sequenceNL);
});

// //timer GER
startTimerGER.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
  sequenceAnimation(sequenceGER);
});

//game basics and easy mode
btnPlayEasy.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
  sequenceAnimation(sequenceEasy);
});

btnWalk.addEventListener("click", (e) => {
  if (
    goLight.classList.contains("on") ||
    cautionLight.classList.contains("on")
  ) {
    alert(`The hedgehog says: "Look left and right before crossing the road!"`);
  } else {
    pedestrian.classList.add("moveLeft");
  }
});

btnReset.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
});

// game hard mode
btnPlayHard.addEventListener("click", (e) => {
  clearAnimation();
  turnOffExcept();
  sequenceAnimation(sequenceHard);
});
