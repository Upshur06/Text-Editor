/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
  // CODE GOES HERE

  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE

  // let para = document.getElementsByTagName("para");
  elem.classList.add("active");
  document.getElementById("text-output").classList.toggle("bold");
  console.log(elem);
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.add("active");
  document.getElementById("text-output").classList.toggle("italic");
  console.log(elem);
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  elem.classList.add("active");
  let formattedText = document.getElementById("text-output");

  if (formattedText.classList.contains("underline")) {
    document.getElementById("text-output").classList.remove("underline");
  } else {
    document.getElementById("text-output").classList.add("underline");
  }
  // console.log(elem);
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName("align");

  for (let i = 0; i <= buttonsList.length - 1; i++) {
    buttonsList[i].classList.remove("active");
  }
  elem.classList.add("active");
}

function clear() {
  // document.getElementById("text-input").value = "";
  // document.getElementById("text-output").value = "";

  document.getElementById("wipeOut").addEventListener("click", function () {
    document.getElementById("text-input").value = "";
    document.getElementById("text-output").innerText = "";
    warning();
  });
}

function warning() {
  setTimeout(function () {
    document.getElementsByClassName("alert")[0].style.display = "block";
  }, 600);

  setTimeout(function () {
    document.getElementsByClassName("alert")[0].style.display = "none";
  }, 5000);
}

clear();
