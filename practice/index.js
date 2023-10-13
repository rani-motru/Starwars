// ways to declaree what variables are
// let , var ,const , boolean
// simple add
// let x = 7; // to assign a value to a variable.
// console.log(x);
// x = 2;
// console.log("the new x value is:", x);
// //console.log(x );
// const y = 9;
// console.log(y);
// z = x + y;
// console.log(z);

// //Simple if statements
// let isSnowing = true;

// if(isSnowing){
//     console.log("bundle up");
// } else {
//     console.log("Enjoy the Summer.");
// }

//example 2
// score = 69.5;
// if (score >= 70){
//     console.log("Certified");
// } else {
//     console.log("failed");
// }

//example 3
// let age = 20;
//  if (age <= 18) {
//      console.log("not qualified");
//  } else if(age >18 && age <= 23) {
//      console.log("party till 8pm");
//  } else {
//      console.log("no time limit");
// }

//nested if statemnets
// let grade= 59;
// if (grade >=90){
//     console.log('A');
// } else if(grade >= 80) {
//     console.log('b');
// } else if(grade >=70) {
//     console.log('c');
// } else if(grade <=69) {
//     console.log('work hard');
//}

// var stringNine = 9;
// stringNine + stringNine;
// console.log(stringNine + stringNine);
// let word = "Supercalifragilisticexpialidocious";
// let word1 = "stop";
// let word2 = word + word1;
// //word.length;
// console.log(word2.length);
// console.log(word2[16]);
//test
// var codeWord1 = "are";
// var codeWord2 = "tubas";
// var codeWord3 = "unsafe";
// var codeWord4 = "?!";
//  var codeWord5 = codeWord1 + codeWord2 + codeWord3 + codeWord4;
// console.log(codeWord5.toUpperCase());
// console.log(codeWord5.slice(6));
// var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// var lowerString = sillyString.toLowerCase();
// var firstCharacter = lowerString[0];
// var firstCharacterUpper = firstCharacter.toUpperCase();
// var restOfString = lowerString.slice(6);
// console.log(lowerString);
// console.log(firstCharacter);
// console.log(firstCharacterUpper);
// console.log(restOfString);
// console.log(firstCharacterUpper + restOfString);
// v

//BOOLEANS EXAMPLE --AND(&&) ---OR(||)----NOT(!)
// var hasApple = true;
// var hasOrange = false;
// var result =  !hasOrange;
// console.log(result);

// let x = 1;
// ++x;
// x++;
// console.log(x);
// x++;
// console.log(x);
// x++;
// console.log(x);

// var isWeekend = false;
// var hadShower = true;
// var hasApple = false;
// var hasOrange = true;
// var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);
// var height = 60;
// var heightRestriction = 60;
// console.log(height == heightRestriction);

//difference between == and ===
// var string ="5";
// let x = 5;
// console.log("test with ==");
// console.log("result",(string == x));
// console.log("test with ===");
// console.log("result",(string === x));

//ARRAYS example
// var dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"];
//     console.log(dinosaurs[0],dinosaurs[3]);
//     console.log("let's change the 1st array item :");
//     dinosaurs[0]="Tyrannosaurus Rex"; 
//     console.log("the changed dinosaurs[0]:",dinosaurs[0]);
//     //
//     var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
//     console.log(dinosaursAndNumbers.slice(2));
// var maniacs = ["Yakko", "Wakko", "Dot"];
// maniacs[0];
// "Yakko"
// maniacs[1];
// "Wakko"
// maniacs[2];
// "Dot"
// console.log(maniacs.length);

// 
//TEMPERATURE AND CONDITIONS nested ifs
// let temp = 59.9;
// if (temp >=90) {
//     console.log("too hot Wear SunScreen and Hat!Drink Water ");
// } else if(temp < 90 && temp >= 80) {
//     console.log("still hot wear SunScreen and Hat");
// } else if( temp < 80 && temp >= 70) {
//     console.log(" HOT WEATHER and good for activities");
// } else if( temp < 70 && temp >= 60) {
//     console.log("nice weather ");
// } else  {
//     console.log("maybe start snowing");
// }
    
//for loops
// let j = 0;
// console.log("numbers by 10");
// for (let i = 1; i <= 10 ; i++)
// {
//     j = j + 10;
//  console.log(j);
// }
//to find the letter in a name:
// const word ="akshitha";
// const letterToFind ="i";

// for(let i = 0 ;i < word.length; i++)
// {
//  if(word[i] === letterToFind) {
//    console.log("match found at the position",i);
//    break;
//  }

// 
//ARRAYS PRACTICE and ARRAYS SYNTAX
//let character = new Array("battle axe", "gold", "water");
//2.literal syntax
// let age = [2,23,13,74];
// console.log(age[2]);
// age[2] = 12;
// console.log(age);
//create an array of favorite movies
// let movie = ["Home Alone","Forest Gump" ,"The Pursuit of Happiness","the Terminal"];
// console.log(movie[1]);
// console.log(movie.length);
// console.log(movie[movie.length-1]);

//repeated addition using Loops!!
// const n = [1, 2, 3, 4, 5];
// let sum  = 0;
// for (let i = 0; i < n.length; i++ )
// {
//     const num1 = n[i]
//     for(let j = 0; j < n.length; j++) {
//         const num2 =n[j];
//         if(num1 + num2 === 7) {
//             console.log(num1, '+' ,num2 ,"Lucky Seven!");
//         }
       
//     }
//    sum +=n[i];
// };
// console.log("the total value", sum);
// //to find the average 
//  let avg = sum / n.length;
//  console.log(avg);
//  const name = "kyle";
//  const favNum = 17;
//  const iLoveCoding = true;
//  const iLoveBeets = false;
//  const blackHole = null;
//  const person ={
//     name: "Simpsons",
//     dob: "02/12/1986",
//     weight: 120,
//     hairColor: "black"
//  }

//  const fruits =["apples", "orange","pears","banana"];
//  const myArray =[21,"pear", [3,7,22],{objectsToo: true}];

//  console.log(person, fruits[1], myArray);


 //S
//nested if statemnets
// let score = 53;
// if (score < 100 && score >= 80) {
//   console.log("You did a Great job!");
// } else if (score < 80 && score >= 70) {
//   console.log("Keep Trying");
// } else if (score < 70 && score >= 60) {
//   console.log("ehhh");
// } else if (score < 60 && score >= 55) {
//   console.log("Not to Good");
// } else {
//   console.log("Bad Grade But you' ll Get em Next Time");
// }
// let j = 0;
// for (let i = 10 ; i < 10 ; i++)
// { 
//    j =j + 10;
//  console.log(j);
// }
//to print a tower
// let x = "#"; 
// console.log(x);
// for(let i= 1; i < 8; i++)
// {
//     x = x + ' ' + '#';
//     console.log(x);
// }
//  let evenNum[10];
// //to print even and odd 1-20 and prime
// for (let i = 1; i <= 20; i++)
// {
//     if (i % 2 == 0){
//         evenNum[]= push.i;


//     }
// }