// variables
export const lights = document.getElementsByClassName("light");
export let x = 0;
export let timeout;
const [stopLight, cautionLight, goLight] = lights;
export const car = document.getElementById("containerCar");

//turn lights off
export function turnOffExcept(light) {
  for (let i = 0; i < lights.length; i++) {
    if (light === lights[i]) {
      light.classList.add("on");
    } else {
      lights[i].classList.remove("on");
    }
  }
}

//make the lightsequence work
export function sequenceAnimation(sequence) {
  timeout = setTimeout(() => {
    turnOffExcept(sequence[x].light);

    if (x < sequence.length - 1) {
      x++;
    } else {
      x = 1;
    }
    sequenceAnimation(sequence);

    
    //caranimation
    if (
      goLight.classList.contains("on")
    ) {
      car.classList.add(`moveDown${sequence[x].duration}`);
      
    } else {
      car.classList.remove(`moveDown${sequence[x].duration}`);
    }
  },
   sequence[x].duration)
}

export function clearAnimation() {
  clearTimeout(timeout);
  x = 0;
  gameReset();
}

function gameReset() {
  pedestrian.classList.remove("moveLeft");
  car.classList.remove("moveDown1000", "moveDown3000", "moveDown500");
}

