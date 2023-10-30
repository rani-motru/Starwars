// making a variable called titleEl
//  we are having that variable hold the information from the element that has the id title
// document.getElementById is a method that looks at the html and returns an element with the matching id
let titleEl = document.getElementById('title');
// console.log to check 
console.log(titleEl);
console.dir(titleEl);



// accessing an element without an id
// document.querySelector(selector)
// creating h1El variable
// get an h1 element from our document and save it in that variable
let h1El = document.querySelector("h1");
console.log(h1El);
// If the CSS selector provided to querySelector()matches multiple elements, it returns the "first" matching element.
// If no matching node is found, nullis returned.

// Practice 
// add a <p> tag and use querySelector() to access it
// let pEl = document.querySelector('p');
// console.log(pEl);

// use the class "cool" and querySelector
let pEl = document.querySelector('.cool');
console.log(pEl);


pEl.textContent = "Comments for <strong>Today</strong>";
pEl.innerHTML = "Comments for <strong>Today</strong>";

// go to your hmtl file
//  you try adding in an unordered list <ul>
//  add some <li>
// in the js file try:
// let listEl = document.querySelector("li");
// console.log(listEl);
// what did you see?

// Changing the style
// let titleEl = document.getElementById('title');
// the variable titleEl which links my js file to the html element with id of title
// update the style to add a property of textAlign and center
// this is similar to css 
// text-align: center;
//titleEl.textContent = "<strong> DOM Practice"
titleEl.innerHTML = "<strong> DOM Practice"
titleEl.style.textAlign = 'center';
titleEl.style.color = 'purple';
titleEl.style.backgroundColor = 'pink';

pEl.style.backgroundColor = 'blue';
pEl.style.color =  'peach';

console.dir(pEl);
console.log(pEl.getAttribute("class"));
console.log(pEl.hasAttribute("id"));

// Adding attributes to elements
// Add an a tag to index.html
// aTag is the js variable that I can reference here
// 'a' is an <a> element that I am adding to my document (which is what is showing up in my browser)
let aTag = document.createElement('a');
// <a> usually have a textContent attribute
//      and an href attribute
//  with content of "Visit Google"
aTag.textContent = "visit google";
//  but without href
// without an href, this won't go anywhere without an href
//      <a href="someurl.com">text content</a>
aTag.setAttribute('href', 'https://www.google.com')
document.body.appendChild(aTag);
console.log(pEl.classList);
// pEl.classList.add("new-class");
pEl.classList.toggle("new-class");
pEl.classList.remove("new-class");
pEl.classList.toggle("new-class");

// add(className, className, ...)
// remove(className, className, ...)
// toggle(className)
// contains(className)
// replace(oldClass, newClass)

// 'comment' is the class name that I am matching
let commentsList = document.getElementsByClassName('comment');
console.log(commentsList);

// querySelectorAll returns ALL of the elements that match the selector
let allLi = document.querySelectorAll('li');
console.log(allLi);
// forEach
console.log('forEach');
allLi.forEach((listEl) => console.log(listEl));
console.log('end forEach');

console.log('for of');
for (let commentEl of allLi) {
    console.log(commentEl);
}
console.log('end for of');
let listEl = document.querySelector('li');
console.log(listEl);

for (let commentEl of allLi) {
    commentEl.style.fontSize = '30px';
}