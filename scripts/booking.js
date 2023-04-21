/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 35;
let numDaysSelected = 0;
let totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Get all the day buttons


let dayButtons = document.querySelectorAll(".day-selector li");
dayButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!event.target.classList.contains("clicked")) {
      event.target.classList.add("clicked");
      numDaysSelected++;
      totalCost += costPerDay;
    }
    let calculatedCostElement = document.getElementById("calculated-cost");
    calculatedCostElement.innerHTML = totalCost;
  });
});
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton = document.getElementById("clear-button");
dayButtons = document.querySelectorAll(".day-selector li");
let selectedDays = [];

clearButton.addEventListener("click", clearDays);

function clearDays() {
  selectedDays = [];
  costPerDay = 35;
  updatedcost(0);
  dayButtons.forEach(button => {
    button.classList.remove("clicked");
  });
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
// get the half-day and full-day buttons

let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
halfDayButton.addEventListener("click", function() {
  costPerDay= 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotalCost();
});

fullDayButton.addEventListener("click", function() {
  costPerDay = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// create variables
// calculate total cost
totalCost = rate * selectedDays.length;
let calculatedCostElement = document.getElementById("calculated-cost");
calculatedCostElement.innerHTML = totalCost;

