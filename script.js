const button = document.getElementById("generate");
const paragraph = document.getElementById("text");

button.addEventListener("click", ()  => {
    paragraph.innerText = generateHorse();
});

const breed = ['Pallas Riding Horse','Vestian War Horse','Working Cow Horse'];

const gender = ['stallion', 'mare','gelding'];

const colour = ['black', 'grey on black', 'chestnut', 'grey on chestnut', 'liver chestnut', 'bay', 'grey on bay', 'dark bay', 'blood bay', 'bay dun', 'red dun', 'grullo (black dun)'];

const generateHorse = () => {

let horseBreed = breed[Math.floor(Math.random() * breed.length)];

let horseGender = gender[Math.floor(Math.random() * gender.length)];

let horseColour = colour[Math.floor(Math.random() * colour.length)];

  return `This horse is a ${horseBreed} ${horseGender} and has a ${horseColour} coat.` 
  
  };

  console.log(generateHorse());
