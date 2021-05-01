// $('currentDay').txt(moment().format("dddd, MMMM Do YYYY"));

// $("btn").on("click", function () {
//     var id = $(this).attr("data-id");
//     var text =$("#" + id).val();
//     localStorage.setItem(id, text);
// }

// var currentHour = moment().hour();
// console.log(currentHour);

// var time = [9, 10, 11 ,12 ,13 ,14 ,15,16 ,17];

// for (var i =0; i < time.length; i++) {

//     if (currentHour < time[i]) {
//         $("#" + i).addClass("future");
//     } else if (currentHour > time[i]) {
//         $("#" + i).addClass("past");
//     }else {
//         $("#" + i).addClass("present");
//     }
//     }

$(document).ready(function () {
  //write all of our jquery inside the function

  //variable declarations
  var currentDay = $("#currentDay");
  // display the current date in the variable
  //plain js => currentDay.textContent = moment().format("dddd, MMM Do");
  currentDay.text(moment().format("dddd, MMM Do"));
  //style 2 moments statically
  //currently able to write in text area, but not capturing the data and not storing in local storage
  //display the date to the user
  //first grab a reference to the element that we want the time to be displayed

  //dynamically style the time block based on current time
  //functions
  //will be responsible for checking the time and determining what class to add, pas , present, future
  function checkTime() {
    //grab the current hour using moment js
    var currentHour = moment().hour();
    //check the current hour against the block hour
    //need to grab the hours for the time block
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  checkTime();

  $(".saveBtn").on("click", function () {
    // need to capture the information that the user inputted and we need to store that info into local storage
    // need to capture the value of that input and i also need to know what time block it is attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //save info to local storage
    localStorage.setItem(time, value);
  });
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  //display the item that are in local storage into the time block
  //event handlers
});
