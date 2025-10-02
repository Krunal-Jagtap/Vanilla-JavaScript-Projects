// Access Element by ID
let heading = document.getElementById("heading");
console.log(heading);

// Access Element by Class
let subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

// Access Element by Tag
let btn = document.getElementsByTagName("button");
console.log(btn);

// Access Element by querySelector => return 1st element
let firstPara = document.querySelector("p");
console.log(firstPara);

// Access Element by querySelectorAll => return all matching element
let allPara = document.querySelectorAll("p");
console.log(allPara);

// Access Element by querySelector with ID and Class
// ID ==> ( #heading )
let idHeading = document.querySelector("#heading");
console.log(idHeading);

// Class ==> ( .sub-heading )
let classHeading = document.querySelector(".sub-heading");
console.log(classHeading);
