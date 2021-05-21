// creating a daily planner



// when opening planner current day is displayed at top of calendar
var todayDate = moment().format('MMMM Do YYYY');
console.log(todayDate);

// var currentDay = "#currentDay";

document.getElementById("currentDay").innerHTML = todayDate;
// function displayDate() {
// }

// create time blocks for standard business hours



// make each time block color-coded for past, present, future



// when click on time block can add event



// when clicking save button for event created it saves in local storage



// when page is refreshed make sure the saved events persists