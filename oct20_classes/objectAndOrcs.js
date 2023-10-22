// =============================================================
//
// This is all background for the classes part of this
//
// =============================================================
// This first part is using objects, but not classes
// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"]
// }
// this shows the entire (array) list of belongings
// console.log(adventurer.belongings);
// this only shows the first belonging in the array
// console.log(adventurer.belongings[0]);
// we can also iterate over an array in an object
// which means we can use a loop to access each item in the array individually
// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }
// let's add an object in an object
// and an object in an object in an object
// it is okay to have companion INSIDE of the companion, but they could
// not both be on the same level
const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
        }
    }
}
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);
// console.log(adventurer.companion.companion.name);
// console.log(adventurer.companion.companion.type);
// what if i want to console.log Tim's health insurance
// console.log(adventurer.companion.companion.belongings[2]);
// Using arrays of objects
const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" },
    { title: "L'Avventura" }
];
// console.log(movies[0].title);
// for (let i=0; i<movies.length; i++) {
//     console.log(movies[i].title);
// }
// curly braces tell me this is an object
// there are no other keywords (function or class)
// this is a function inside of an object
const foo = {
    someMethod: ()=>{
        console.log('oh hai!')
    }
}
// foo.someMethod();
// =============================================================
//
// This is where we start practicing with classes
//
// =============================================================
 class Character {
 //the constructor goes first
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs){
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age =age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs ||false
      }
    

 //class methods that a character instance can invoke 
 greet (otherCharacter) {
    console.log(`hi ${otherCharacter} !`)
  }
  classyGreeting (otherClassyCharacter) {
    console.log('Greetings ' + otherClassyCharacter.name + '!');
  }
  setHair(hairColor) {
      this.hair = hairColor

  }

  smite () {
    console.log('I smite thee you vile person');
  }
 }

 const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
 const you = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
//  console.log(me);
//  console.log(you)
// const me = new Character();
//  const you = new Character();
//  console.log(me)
//  console.log(you)
 //console.log(typeof me)
 //console.log(typeof you)
 //console.log(you.name);
 if(you.name ==='George'){
    console.log(`hi George`)
 }

 me.greet('You');
 me.smite();
 //you.greet('Me');
 //me.smite();
// me.legs =1
// console.log(me)
me.hair = 'Supernova red'
//console.log(me)
you.setHair('red')
//console.log(you)

you.classyGreeting(me)