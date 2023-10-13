// arrays []
//let cars = ['BenZ','Audi','Tesla','volvo']
//console.log(cars[3])
// 
//Write a for loop that iterates from 1 - 20. 
//Prints “prime” for all prime numbers, “even” for all even numbers, 
//and “odd” for all odd numbers.
// to Print numbers
// for(count = 0; count <=20; count++) {
//     console.log(count)
// }
//for Even number
//console.log('Even Numbers')
// for(count = 0; count <=20; count++) {
//     if(count % 2 == 0){
//         console.log(count +"even")
//     }
//     // odd
//     if(count % 2 == 1) {
//         console.log(count +"odd")
//     }

    //prime  number is a number that is divisible by 1 and  itself
     for(count = 2; count <= 20;count++) {
        if(count % 2 != 0 && count % 3 !=0){
            console.log(counter+ 'prime')
        } else {
            console.log(counter+ 'prime')
        }
     }
    //     if(count % 2 != 0 && count % 3 !=0){
    //         console.log(counter+ 'prime')
    //     } else {
    //         console.log(counter+ 'prime')
    //     }
        
    //  }
    // const primeNum =[];
    // for(let i = 2; i<= 20; i++){
    //     let isPrime =  true;
    //     for(let j = 2; j < i; j++) {
    //         if(i % j === 0) {
    //             isPrime =  false;
    //             break;
    //         }
    //     }
    //     if (isPrime) {
    //         primeNum.push(i);
    //     }
    // } 
    // console.log(primeNum);
// }