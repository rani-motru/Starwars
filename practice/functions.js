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
  





