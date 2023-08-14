// const headerTitle = document.getElementById("header-title");
// console.log(headerTitle.innerText);

// const liList = document.getElementsByTagName('li');
// console.log(liList);
// for(const li of liList){
//     console.log(li.innerText);
// }

// const allHeadings = document.getElementsByTagName('h1');
// console.log(allHeadings)
// for(const h1 of allHeadings){
//     console.log(h1.innerText)
// }

const placesTitle = document.getElementById("places-title");
placesTitle.innerText = "The place i have been visit in Bangladesh";
console.log(placesTitle.innerText)

const fruitsTitle = document.getElementById("fruits-title");
fruitsTitle.innerText = "Fruits I like"
console.log(fruitsTitle.innerText);

const importantPlaces = document.getElementsByClassName("important-places");
console.log(importantPlaces);
for(const place of importantPlaces){
    console.log(place.innerText);
}