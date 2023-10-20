if([]) {
    console.log('hello')
    if(0) {
        console.log('goodbye')
    } else {
        console.log('hello')
    }
} else if(3 === '3') {
    console.log('the answer')
} else {
    console.log('i had a great lunch')
}

//this is a tets  cat
//this is a tets
const fb = [];
// ADD CODE HERE
 for(let i = 1; i <= 16; i++)
   {
     if (i % 3 == 0) {
       fb.push('fizz')
     } else if( i % 5 == 0){
       fb.push('buzz')
 //      console.log('buzz')
     } else if(i % 3 ==0 && i % 5 ==0) {
       fb.push('fizzbuzz')
 //      console.log('fizzbuzz')
     } else{
       fb.push(i)
 //      console.log(i)
     }
   }

console.log(fb)