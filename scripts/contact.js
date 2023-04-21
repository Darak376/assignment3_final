// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// get a reference to the submit button
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", changeMessage);

function changeMessage() {
  let newmessage = document.getElementById("contact-page");
  newmessage.innerHTML = "Thank you for your message!";
  newmessage.style.fontSize = "24px";
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

