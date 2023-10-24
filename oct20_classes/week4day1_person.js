class hamster
{
 constructor(owner ='',name,price=15){
    this.owner =owner;
    this.name = name;
    this.price = price;
 }
 //wheelRun() - log "squeak squeak"
 wheelRun() {
    console.log('Squeak Squeak');
 }
//  eatFood() - log "nibble nibble"
 eatFood(){
    console.log('nibble nibble');
 }
//  getPrice() - return the price
 getPrice(){
    return this.price
 }
}

// const animal = new hamster('','Betty')
// console.log(animal)
//  animal.eatFood();
// animal.getPrice();
//  console.log(animal.getPrice())

//================================PERSON CLASS==========================================================
/**Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0 */
//==================================================================================

class person {
    constructor(name,age = 0,height = 0,weight = 0,mood =0, hamster =[],bankAccount = 0){
        this.name =name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamster = hamster;
        this.bankAccount = bankAccount;
    }
    //getName() - returns name
    getName(){
        return this.name
    }
    //getAge() - returns age
    getAge(){
        return this.age
    }
    //getWeight() - returns weight
    getWeight(){
        return this.weight
    }
    //greet() - logs a message with person's name
    greet() {
        console.log(`Hello ,${this.name}`)
    }
    //eat() - increment weight, increment mood
    eat(){
        this.weight++;
        this.mood++;
    }
    //exercise() - decrement weight
    exercise(){
        this.weight--;
    }
    //ageUp() - increment age, increment height, increment weight, decrement mood,
    // increment bank account by 10 (birthday money)
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount +=10;
    }
    //buyHamster(hamster) - push the hamster object onto the hamster array, 
    //increment mood by 10, decrement bankAccount by the value of the hamster 
    //(hint: use getPrice())
    buyHamster(hamster){
        this.hamster.push(hamster.name);
        this.mood += 10;
        this.bankAccount -=hamster.getPrice();
    }
}
// 1.Instantiate a new Person named Timmy
const timmy = new person('Timmy')
//2.Age Timmy five years
for(let i= 0;i< 5;i++){
    timmy.ageUp();
}
console.log(`intial age  ${timmy.age}  and bank balance ${timmy.bankAccount}`);
//3.At this point Timmy's a little bummed. As a precocious child, 
//he feels he's "seen it all" already. Have him eat five times.
for(let i= 0;i< 5;i++){
    timmy.eat();
}
//4.Now Timmy's a little heavier than he wants to be.
// Kindergarten's coming up and he wants to look good.
// Have him exercise five times
for(let i= 0;i< 5;i++){
    timmy.exercise();
}
//5.Age Timmy 9 years
for(let i= 0;i< 9;i++){
    timmy.ageUp();
}
//6. Create a hamster named "Gus"
//7.Set Gus's owner to the string "Timmy"
const gus = new hamster(timmy.getName(),'Gus')

//8.Have Timmy "buy" Gus
timmy.buyHamster(gus);
//9.Age Timmy 15 years
for(let i= 0;i< 15;i++){
    timmy.ageUp();
}
//10.Have Timmy eat twice
for(let i= 0;i< 2;i++){
    timmy.eat();
}
//11.Have Timmy exercise twice
for(let i= 0;i< 2;i++){
    timmy.exercise();
}
console.log(timmy)