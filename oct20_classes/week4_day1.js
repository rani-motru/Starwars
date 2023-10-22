class hamster
{
 constructor(owner ='',name,price=15){
    this.owner =owner;
    this.name = name;
    this.price = price;
 }
 wheelRun() {
    console.log('Squeak Squeak');
 }
 eatFood(){
    console.log('nibble nibble');
 }
 getPrice(){
    return this.price
 }
}

const animal = new hamster('','Betty')
console.log(animal)
 animal.eatFood();
//  animal.getPrice();
 console.log(animal.getPrice())
