const lights = document.getElementsByClassName("light");
const [stopLight, cautionLight, goLight] = lights;

export const sequenceGER = [
  { light: stopLight, duration: 0 },
  { light: cautionLight, duration: 1000 },
  { duration: 1000 },
  { light: cautionLight, duration: 1000 },
  { duration: 1000 },
  { light: cautionLight, duration: 1000 },
  { light: goLight, duration: 1000 },
  { light: stopLight, duration: 1000 },
]

export const sequenceNL = [
  { light: stopLight, duration: 0 },
  { light: cautionLight, duration: 1000 },
  { light: goLight, duration: 1000 },
  { light: stopLight, duration: 1000 },
];

export const sequenceUK = [
  { light: stopLight, duration: 0 },
  { light: cautionLight, duration: 1000 },
  { light: goLight, duration: 1000 },
  { light: cautionLight, duration: 1000 },
  { light: stopLight, duration: 1000 },
];