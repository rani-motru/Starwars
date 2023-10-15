
// const house = {
// 	doors: 9
// }

// console.log(house)

// house.windows =10
// console.log(house)
// house.hasYard = true
// console.log(house)
// house.doors = 12
// console.log(house)

const rani = {
    eyes: 'brown',
    hair: 'curly',
    skin: 'brown',
    favColor: 'Blue',
    favThings: ['cooking','coloring','music'],
    // hair:'pink',
    pet:{
        type:'dog',
        name: 'biscuit',
        nature: 'Friendly'
    }

}
  console.log(rani.favThings[1])
//  if('favColor' in rani){
//     console.log('found')
//  }
//using For in loop to get the cooking from favthings
// for(let y in rani){
//     if('coloring' in rani.favThings) {
//         console.log('found')
//     } else {
//         console.log('not found')
//     }
// }
const planetHasWater = function(planet){
    if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars") return true;
    return false;
}