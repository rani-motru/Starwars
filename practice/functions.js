// 
// defining Functions
//name is a parameter
// function sayHello(name) {
//     console.log('Hello ' + name + '!')
// }
// let name = sayHello('Rani')
 // another way
 //Ravi is a arugment
//  sayHello('Ravi')

 //FUNCTION EXPRESSION
//  const sayHello = function(name) {
//     console.log('Hello ' + name +'!')
//  }

//  sayHello('Akshitha')

 //ARROW FUNCTIONS
//  const sayHello =(name) => {
//     console.log('Hello ' + name +'!')
//  }
//  // we use consr for functions so we don't accidentally 
// //  //change
//   sayHello('Akshitha')
// // hoisting with variables
//willget a refence  errod=r: cannot access 'fruit'
// console.log(fruit)
// let fruit ='apple' //v if we use var the o/p says undefined


//ARROW FUNCTIONS WITH IMPLICT RETURN
// const sayHello = (name) => console.log('hello  ' +name +'!')
//  sayHello('Ashvik')


// function sayHello(name) {
      //     console.log('Hello ' + name + '!')
    // }
    // let name = sayHello('Rani')
//to find the area
// function computeArea(width , height) {
//  let area = width * height
//  return`The area of a rectangle with a width of  ${width} and a height of ${height} is ${area} square units`
// }
  
// const computedArea = computeArea (10,5)
// console.log(computedArea)


// exerccise 2
// function planetHasWater(planet) {
//    if(planet == 'Earth'|| planet =='Mars'){
//    return true
//     } else {
//     return false
//   }
//  }
//  console.log(planetHasWater('earth'))
//  console.log(planetHasWater('Mars'))
 // another way
// const planetHasWater = function(planet) {
//    if(planet.toLowerCase() === 'earth'|| planet.toLowerCase() ==='mars'){
//    return true
//     } else {
//     return false
//   }
//  }
//  console.log(planetHasWater('Earth'))
//  console.log(planetHasWater('Mars'))
//  console.log(planetHasWater('VENUS'))
//

//Micaiah Code:
// const planetHasWater = function(planet){
//     if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars") return true;
//     return false;
// }
// //Parameters and Arguments
// }

// var a =['red', 'green','blue'];
// a.foreach{function{color}
// {
//     console.log(color);
// }};
// a.foreachcolor => console.log(color)}

//setColor('blue');  // sets color to blue

// function openNewAccount(name, openingBalance) {
//     let acctNum = generateAcctNum();
  
//     // createAccount is a function available outside this function
//     let acct = createAccount(acctNum, openingBalance);
//     return acct;
  
//     // helper function that provides a unique account number
//     function generateAcctNum() {
//       return Date.now();  // super amazing algorithm :)
//     }
//   }
  


// function getRandomInt(min, max) {
//   //BY RANI
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   let n1 = (Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//    return (n1/10);
// }
function getRandomInt(min, max) {
  //BY RANI
  min = Math.ceil(min);
   max = Math.floor(max);
  // removed the Math.floor
  let num =  Math.random() * (max - min) + min; // The maximum is exclusive and the minimum is inclusive
  return (num.toFixed(3));
}
  const randAccuracy = getRandomInt(6, 8);

  console.log(randAccuracy);

// class EnemySpaceShip{
//   constructor(hull, firepower, accuracy){
//       this.hull = hull;
//       this.firepower = firepower;
//       this.accuracy = accuracy;
//   }
//   attack(){
//       //Rani
//       // Make sure to program in an if statement checking if you miss or not
//   }
//   die(){
//       //Rani
//   }

// }

// class Player{
//   constructor(hull, firepower, accuracy){
//       this.hull = 20;
//       this.firepower = 5;
//       this.accuracy = 0.7;
//   }
//   //
//   attack(target){
//       if (Math.random() < this.accuracy){
//           target.hull -=this.firepower;
//           return [true, this.firepower] //hit

//       } else return false
//       //Rani
//       // Make sure to program in an if statement checking if you miss or not
//   }
// }

// const num = getRandomInt(6, 8)
// //  let dec = (num/10);
// console.log(num)