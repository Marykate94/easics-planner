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

// $(".saveButton").click(function() {
//     // grab id's for text input elements
//     $("#input1, #input2, #input3, #input4, #input5, #input6, #input7, #input8, #input9");
// });
// console.log(".saveButton"); <-- jQuery method

function captureSaveEvent(event) {
    console.log(event);
    //variable parent div is equal to event.target.parentdiv save variable of description event.target.parentdiv.description.innertext
    //look for the input type in the console might need to save whole parent div as a variable
    var storeDescription = localStorage.getItem(".description",input);
    var parentDiv = event.target.container;
    localStorage.setItem(".description",input.val());
}
var saveBtn = document.getElementsByClassName("saveButton");
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", captureSaveEvent);

}


// var inputEl = document.querySelector("description");
// var saveBtn = inputEl.getAttribute("save-button");
// var saveButtonEl = document.createElement("button");
// saveButtonEl.textContent = "Save";
// saveButtonEl.className = "saveBtn";
// saveButtonEl.setAttribute("save-button", saveBtn);

// actionContainerEl.appendChild(saveButtonEl);

// create local storage 
// var input = document.getElementById("saveServer");
// localStorage.setItem("server", input.val());


// when page is refreshed make sure the saved events persists