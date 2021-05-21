// creating a daily planner
// when opening planner current day is displayed at top of calendar
var todayDate = moment().format('dddd, MMMM Do');
console.log(todayDate);

// var currentDay = "#currentDay";
document.getElementById("currentDay").innerHTML = todayDate;
// function displayDate() {
// }

// create time blocks for standard business hours in HTML
// created in HTML

// make each time block color-coded for past, present, future


// when click on time block can add event
// 

// when clicking save button for event created it saves in local storage
// create button
// create edit button
var inputEl = document.querySelector("description");
var saveBtn = inputEl.getAttribute("save-button");
var saveButtonEl = document.createElement("button");
saveButtonEl.textContent = "Save";
saveButtonEl.className = "saveBtn";
saveButtonEl.setAttribute("save-button", saveBtn);

actionContainerEl.appendChild(saveButtonEl);
// create local storage 
// var input = document.getElementById("saveServer");
// localStorage.setItem("server", input.val());


// when page is refreshed make sure the saved events persists