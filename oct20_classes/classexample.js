//animal class
class Animal {
    //the constructor will have the attribute for thr class
    constructor(type,numleg,fur,horns,tail){
        this.type = type;
        this.numleg = numleg;
        this.fur = fur;
        this.horns = horns;
        this.tail = tail;
    }
}

const newAnimal = new Animal('cow', 4, false, 2, true)
console.log(newAnimal)
const newBird = new Animal('Robin', 2, false, 0, true)
console.log(newBird)
const newAnimal1 = new Animal('Dog', 4 , true, 0, true)
console.log(newAnimal1)
// i want  to get the name of newAnimal and tail of newBird and legs from newAnimal1
console.log(newAnimal.type ,newBird.tail,newAnimal1.numleg)