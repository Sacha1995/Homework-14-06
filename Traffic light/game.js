const lights = document.getElementsByClassName("light");
const [stopLight, cautionLight, goLight] = lights;

//game easy mode
export const sequenceEasy = [
  { light: stopLight, duration: 0 },
  { light: cautionLight, duration: 3000 },
  { light: goLight, duration: 3000 },
  { light: cautionLight, duration: 3000 },
  { light: stopLight, duration: 3000 },
]

// game hard mode
export const sequenceHard = [
  { light: stopLight, duration: 0 },
  { light: cautionLight, duration: 500 },
  { light: goLight, duration: 500 },
  { light: stopLight, duration: 500 },
]