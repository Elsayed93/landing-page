/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let allSections = document.querySelectorAll("section");
let navUl = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();

//Get the top button:
let topButton = document.getElementById("topButton");

let navBar = document.getElementsByClassName("navbar__menu");
// Setup isScrolling variable
let isScrolling;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// When the user scrolls down 20px from the top of the document, show the button

// Listen for scroll events
window.addEventListener(
  "scroll",
  function (event) {
    // As long as the user scroll, show navBar
    navBar[0].style.display = "block";

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // disapear the nav bar
      navBar[0].style.display = "none";
    }, 3000);
  },
  false
);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Toggle between adding and removing the "responsive" class to navUl
function myFunction() {
  console.log("navUl", navUl);
  if (navUl.className === "navUl") {
    navUl.className += " responsive";
  } else {
    navUl.className = "navUl";
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
allSections.forEach((element) => {
  // console.log(element);
  let sectionName = element.getAttribute("data-nav");
  let sectionId = element.getAttribute("id");
  let navLi = document.createElement("li"); // Create a <li> tag
  let navAnchor = document.createElement("a"); // Create a <li> tag

  // Create the text node for anchor element.
  let link = document.createTextNode(sectionName);

  // Append the text node to anchor element.
  navAnchor.appendChild(link);

  // Set the href property.
  navAnchor.href = "#" + sectionId;

  // Append the anchor element to navLi.
  navLi.appendChild(navAnchor);

  fragment.appendChild(navLi); // Append <li> to <ul> with id="myList"

  navLi.addEventListener("click", (event) => {
    // prevent default for clicked anchor and scroll smooth
    event.preventDefault();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

navUl.appendChild(fragment);
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", function () {
  allSections.forEach((section) => {
    if (section.classList.contains("your-active-class")) {
      section.classList.remove("your-active-class");
    }

    if (
      section.getBoundingClientRect().top > 0 &&
      section.getBoundingClientRect().top < 400
    ) {
      section.classList.add("your-active-class");

      //
      let allNavLi = navUl.querySelectorAll("li");
      allNavLi.forEach((li, index) => {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
        }

        if (li.children[0].textContent === section.getAttribute("data-nav")) {
          li.classList.add("active");
        }
      });
    }
  });
});
