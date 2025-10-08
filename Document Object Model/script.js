// Access Element by ID
let heading = document.getElementById("heading");

// Default View :
console.log(heading);

// Object View :
console.dir(heading);

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

// Access List
let list = document.querySelector("ol");

// TagName ==> return tag element
console.log(list.tagName);

// InnerHTML ==> return text + html
console.log(list.innerHTML);

// InnerText ==> return text and child elements
console.log(list.innerText);

// TextContent ==> return hidden elements text
console.log(list.textContent);

// += Concat
let h2 = document.querySelector("h2");
h2.innerText += " DOM Manipulation";

// Access .box - Add Text
let allBox = document.querySelectorAll(".box");

// Using Array Indexing
// allBox[0].innerText = "BOX 1";
// allBox[1].innerText = "BOX 2";
// allBox[2].innerText = "BOX 3";

// Using Loop
let index = 1;
for (const box of allBox) {
  console.log((box.innerText = `BOX ${index}`));
  index++;
}

// Attributes
let changeAttribute = document.querySelector("h3");

// getAttribute
console.log(changeAttribute.getAttribute("class"));

// setAttribute
console.log(changeAttribute.setAttribute("class", "CHANGED"));

// Create and Insert Element
// Create Element
let newBtn = document.createElement("button");
newBtn.innerText = "Dynamic Button";

// Access node Where to insert new element
let section = document.querySelector("section");

// insert element
// append ==> Added in end of node ( section - Inside)
section.append(newBtn);

// prepend ==> Added in start of node ( section - Inside)
section.prepend(newBtn);

// before ==> Added in before node ( section - Outside)
section.before(newBtn);

// after ==> Added in after node ( section - Outside)
section.after(newBtn);

// remove ==> remove the node ( Section )
// section.remove();

// Add Class to newBtn
newBtn.classList.add("dynamicCSS");

// Event Listener

// Access newBtn ( Here newBtn already accessible )

// Add Click Event

const clickEvent = () => {
  newBtn.innerText = "Submit";
};

newBtn.addEventListener("click", clickEvent);

// Remove Click Event
// newBtn.removeEventListener("click", clickEvent);

// Light - Dark Mode
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currentMode = "light";

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    modeBtn.innerText = "Light Mode";
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    modeBtn.innerText = "Dark Mode";
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
