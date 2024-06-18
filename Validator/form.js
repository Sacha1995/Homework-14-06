// variables
const friendForm = document.forms["form1"];
let userInput = {};
const errorRef = document.getElementsByClassName("error");
const input = document.getElementsByTagName("input");
const inputArr = Array.from(input);
let icecreamInteractedWith = false;

//submit data
friendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Object.values(userInput).includes(""))
    alert("Make sure you have answered every Question");
  else {
    console.log(userInput);
  }
});

//validators
friendForm.addEventListener("input", (e) => {
  if (inputArr.some((e) => e.name === "icecream" && e.checked === true)) {
    icecreamInteractedWith = true;
  }
  console.log(icecreamInteractedWith);
  const formData = new FormData(friendForm);
  userInput = Object.fromEntries(formData);
  // If you have checkboxes or selects in multiple mode
  const multis = Array.from(friendForm.querySelectorAll(`[type="checkbox"]`));
  const multiNames = Array.from(new Set(multis.map((input) => input.name)));
  userInput.icecream = [];
  if (multis.length) {
    // Get full values for checkboxes & multi-selects
    for (const key in userInput) {
      if (userInput.hasOwnProperty(key) && multiNames.includes(key)) {
        const fullData = formData.getAll(key);
        userInput[key] = fullData;
      }
    }
  }
  for (const error of errorRef) {
    error.innerHTML = "";
  }
  validate();
});

//Joi validation
const schema = {
  name: Joi.string().min(3).max(12),
  bday: Joi.date().min("1-1-1930").max("1-1-2024"),
  age: Joi.number().min(0).max(130),
  favColor: Joi.string().min(3).max(24),
  dream: Joi.string().min(10).max(100),
  fight: Joi.string().required(),
  icecream: Joi.array().min(1),
  video: Joi.string().uri(),
};

// Makes sure you don't stop after one error
function validate() {
  const j = Joi.object(schema);

  const r = j.validate(userInput, { abortEarly: false });

  console.log(r);
  const errorsObj = {};

  // makes it so not all the errors come at ones, just for the inputs you have typed or clicked
  for (const input of inputArr)
    if (r.error) {
      r.error.details.forEach((error) => {
        if (error.context.key)
          if (input.name == error.context.key) {
            if (
              (input.name !== "icecream" && input.value != "") ||
              (input.name === "icecream" && icecreamInteractedWith)
            ) {
              // console.log(input.icecream);
              errorsObj[error.context.key] = error.message;
            }
          }
      });
    }

  Joi.validate(userInput, schema, (err, res) => {
    if (!err) {
      return;
    }
    // set errors in the dom
    for (const error of errorRef) {
      const id = error.id.split("Error");
      error.innerHTML = errorsObj[id[0]] || "";
    }
  });
  return errorsObj;
}
