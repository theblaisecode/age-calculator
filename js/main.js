// "use strict";
// On click
document.querySelector("button").addEventListener("click", calculateAge);

// get value out of input
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

// Error message
const dayRequiredError = document.querySelector("small.day");
const monthRequiredError = document.querySelector("small.month");
const yearRequiredError = document.querySelector("small.year");
const dayError = document.querySelector("small.validDay");
const monthError = document.querySelector("small.validMonth");
const yearError = document.querySelector("small.validYear");

// h2 result
const resultYear = document.querySelector("#years");
const resultMonth = document.querySelector("#months");
const resultDay = document.querySelector("#days");

const date = new Date();
let currentYear = date.getFullYear() - 1;
let currentMonth = date.getMonth();
let currentDay = date.getDate();

function calculateAge() {
   let age = currentYear - inputYear;

   // Year
   if (inputYear.value > currentYear) {
      yearRequiredError.classList.remove("add");
      yearError.classList.add("add");
      inputYear.style.border = "1px solid var(--light-red)";
   } else if (inputYear.value === "") {
      yearError.classList.remove("add");
      yearRequiredError.classList.add("add");
      inputYear.style.border = "1px solid var(--light-red)";
   } else {
      inputYear.style.border = "1px solid var(--purple)";
      resultYear.innerText = currentYear - inputYear.value;
   }

   // Month
   const monthDifference = inputMonth.value - currentMonth;
   if (inputMonth.value > 31) {
      monthRequiredError.classList.remove("add");
      monthError.classList.add("add");
      inputMonth.style.border = "1px solid var(--light-red)";
   } else if (inputMonth.value === "") {
      monthError.classList.remove("add");
      monthRequiredError.classList.add("add");
      inputMonth.style.border = "1px solid var(--light-red)";
   } else {
      let month =
         ((currentMonth + 12) % 12) -
         inputMonth.value +
         12 * Math.floor((currentMonth - inputMonth.value) / 12);
      inputMonth.style.border = "1px solid var(--purple)";
      resultMonth.innerText = monthDifference;
   }

   // Days
   if (inputDay.value > 31) {
      dayRequiredError.classList.remove("add");
      dayError.classList.add("add");
      inputDay.style.border = "1px solid var(--light-red)";
   } else if (inputDay.value === "") {
      dayError.classList.remove("add");
      dayRequiredError.classList.add("add");
      inputDay.style.border = "1px solid var(--light-red)";
   } else {
      let day = inputDay.value - currentDay;
      resultDay.innerText = day;
   }
}

// // Show input error message
// function showError(input, message) {
//    const formControl = input.parentElement;
//    formControl.className = "form-control error";
//    const small = formControl.querySelector("small.required");
//    small.innerText = message;
// }
// // Show input error message
// function showError(input, message) {
//    const formControl = input.parentElement;
//    formControl.className = "form-control error";
//    const small = formControl.querySelector("small.validDay");
//    small.innerText = message;
// }
// // Show input error message
// function showError(input, message) {
//    const formControl = input.parentElement;
//    formControl.className = "form-control error";
//    const small = formControl.querySelector("small.validMonth");
//    small.innerText = message;
// }
// // Show input error message
// function showError(input, message) {
//    const formControl = input.parentElement;
//    formControl.className = "form-control error";
//    const small = formControl.querySelector("small.validYear");
//    small.innerText = message;
// }

// form.addEventListener("submit", function (event) {
//    event.preventDefault();
//    if (inputYear.value > currentYear) {
//       showError(year, "Username is required");
//    } else if (inputYear.value === "") {
//       showError(year, "Failed");
//    }
// });

// function calculateAge() {
//    if (inputYear.value > currentYear) {
//       showError(year, "Username is required");
//    } else if (inputYear.value === "") {
//       showError(year, "Failed");
//    } else {
//       let calcYear = currentYear - inputYear;
//       resultYear = calcYear;
//    }
// }

// function age(birthdate) {
//    const today = new Date();
//    const age =
//       today.getFullYear() -
//       birthdate.getFullYear() -
//       (today.getMonth() < birthdate.getMonth() ||
//          (today.getMonth() === birthdate.getMonth() &&
//             today.getDate() < birthdate.getDate()));
//    return age;
// }

// // Get today's date object
// const today = new Date();
// function age(birthdate) {
//    // A bool that represents if today's day/month precedes the birth day/month
//    const one_or_zero =
//       today.getMonth() < birthdate.getMonth() ||
//       (today.getMonth() === birthdate.getMonth() &&
//          today.getDate() < birthdate.getDate());

//    // Calculate the difference in years from the date object's components
//    let year_difference = today.getFullYear() - birthdate.getFullYear();

//    // The difference in years is not enough.
//    // To get it right, subtract 1 or 0 based on if today precedes the
//    // birthdate's month/day.
//    // To do this, subtract the 'one_or_zero' boolean from 'year_difference'
//    // (This converts true to 1 and false to 0 under the hood.)
//    const age = year_difference - one_or_zero;

//    return age;
// }
// // Example age check:
// // console.log(age(new Date(2000, 0, 1)));

// let birthdate = new Date(2000, 1, 29); // 29th Feb 2000
// let today = new Date(2001, 1, 28);     // 28th Feb 2001
// let year_difference = today.getFullYear() - birthdate.getFullYear();  // 2001 - 2000 = 1
// let one_or_zero = (today.getMonth() < birthdate.getMonth()) ||
//                   (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()) ? 1 : 0;
// let age = year_difference - one_or_zero;
// console.log(age);  // Output: 0

// function calculateAge() {
//    if

//    // minus it from current year

//    // put it in the dom
// }
