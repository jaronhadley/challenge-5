// current date link
var currentDate = $("#currentDay");
// individual time block links
var nine = $("#9a");
var ten = $("#10a");
var eleven = $("#11a");
var twelve = $("#12p");
var one = $("#1p");
var two = $("#2p");
var three = $("#3p");
var four = $("#4p");
var five = $("#5p");
// time block link
var timeBlock = $(".time-block");
// save button link
var saveBtn = $(".saveBtn");


// report today's date
currentDay.textContent = moment().format("dddd, MMM Do YYYY");

// time block array
var times = [nine,ten,eleven, twelve,one,two,three,four,five];
// add past present future classes to timeslots
// update once hour elapses
function renderBlocks (){
    currentHour = moment().hour();
    times.forEach(hour =>{
        if(hour.data("hour")<currentHour){
            hour.addClass("past");
        } else if(hour.data("hour")==currentHour){
            hour.addClass("present");
        } else {
            hour.addClass("future");
        }
    })
}

// render saved events from local storage
function renderEvents (){
    times.forEach(hour =>{
        hour.text(localStorage.getItem(hour.data("storagename")));
    })
}
// save new events to local storage variables
function saveNewEvents (event) {
    var description = $("#"+$(event.target).data("storagename"));
    localStorage.setItem(description.data("storagename"),description.text());
    renderEvents(); // render the events again with updates
}

renderBlocks();
renderEvents();
setInterval(renderBlocks,60000);
saveBtn.on("click",saveNewEvents);