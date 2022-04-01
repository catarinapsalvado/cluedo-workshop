let mrGreen = {
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://www.ultraboardgames.com/clue/gfx/mr-green.jpg",
  color: "green ",
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "https://www.ultraboardgames.com/clue/gfx/mrs-white.jpg",
  color: "white",
};

let profPlum = {
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image:
    "https://www.ultraboardgames.com/clue/gfx/professor-plum.jpg",
  color: "purple",
};


let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image : "https://www.ultraboardgames.com/clue/gfx/miss-scarlet.jpg",
  color: "red",
};

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image : "https://www.ultraboardgames.com/clue/gfx/mrs-peacock.jpg",
  color: "blue",
};

let mrMustard = {
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image:
    "https://www.ultraboardgames.com/clue/gfx/colonel-mustard.jpg",
  color: "yellow",
};

let suspectsArray = [
   mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard
]

// ### Weapons

let rope = {
  name: 'rope',
  weight: 10,
};

let knife = {
  name: 'knife',
  weight: 8,
};

let candlestick = {
  name: 'candlestick',
  weight: 2,
};

let dumbbell = {
  name: 'dumbbell',
  weight: 30,
};

let poison = {
  name: 'poison',
  weight: 2,
};

let axe = {
  name: 'axe',
  weight: 15,
};

let bat = {
  name: 'bat',
  weight: 13,
};

let trophy = {
  name: 'trophy',
  weight: 25,
};

let pistol = {
  name: 'pistol',
  weight: 20,
};

let weaponsArray = [
rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol 
]

// ### Rooms

let diningRoom = {
  name: "Dining Room",
};
let conservatory = {
  name: "Conservatory",
};
let kitchen = {
  name: "Kitchen",
};
let study = {
  name: "Study",
};
let library = {
  name: "Library",
};
let billiardRoom = {
  name: "Billiard Room",
};
let lounge = {
  name: "Lounge",
};
let ballroom = {
  name: "Ballroom",
};
let hall = {
  name: "Hall",
};
let spa = {
  name: "Spa",
};
let livingRoom = {
  name: "Living Room",
};
let observatory = {
  name: "Observatory",
};
let theater = {
  name: "Theater",
};
let guestHouse = {
  name: "Guest House",
};
let patio = {
  name: "Patio",
};

let roomArray = [
diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio
]


//Funtion that will return one random suspect, weapon and room. Create a variable, with the value of the array of objects
//that we created before . To make it random we need to use the Math.room. To make an integer number, put the math flooe 
// The random integer number chosen will be the index of the element in the array. For that we need to multiply
// for his lenght
function pickMystery(){
let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)]
let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]
let room = roomArray[Math.floor(Math.random() * roomArray.length)]

return {suspect, weapon, room}

}

// Em vez disto que fica feio, tentar mostrar a lista dos nomes, rooms, pondo um input diferente no HTML
showArray(suspectsArray)
showArray(roomArray)
showArray(weaponsArray)

function showArray (arr){
arr.forEach(function(eachItem){
document.body.innerHTML += `<li>${eachItem.name} </li>`
})          
}

//Contudo, aqui basicamente mostramos todos os dados ao user. o for each é o loop que vai iterar no array e fazer com que se mostre

//guardar a função que nos dá a solução numa variável para podermos usar quando quisermos 
let mystery = pickMystery();

console.log(mystery);

//What it does when we click on guess. it uses the funcion guess

document.querySelector('button').onclick = guess;

//função que usamos quando se clica no guess. A função dá-nos o value do suspect, room e value correto,
//
function guess(){
let guessedSuspect = document.querySelector('#suspect').value
let guessedRoom= document.querySelector('#room').value
let guessedWeapon = document.querySelector('#weapon').value
console.log(guessedSuspect, guessedWeapon, guessedRoom)
if(
 guessedSuspect === mystery.suspect.name
 && guessedRoom === mystery.room.name
 &&guessedWeapon === mystery.weapon.name)
  {
    alert( 'You guessed it right! You won!')
  } else {
    alert (`You guesses it wrong. ${mystery.suspect.name} killed Mr. Body in the ${mystery.room.name} with the ${mystery.weapon.name}.` )
  }
   document.body.innerHTML = `<img src= ${mystery.suspect.image} />`
}

//No final tentar meter o resto da informação do jogo