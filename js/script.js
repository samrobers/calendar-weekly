$('currentDay').txt(moment().format("dddd, MMMM Do YYYY"));

$("btn").on("click", function () {
    var id = $(this).attr("data-id");
    var text =$("#" + id).val();
    localStorage.setItem(id, text);
}

var currentHour = moment().hour();
console.log(currentHour);

var time = [9, 10, 11 ,12 ,13 ,14 ,15,16 ,17];

for (var i =0; i < time.length; i++) {

    if (currentHour < time[i]) {
        $("#" + i).addClass("future");
    } else if (currentHour > time[i]) {
        $("#" + i).addClass("past");
    }else {
        $("#" + i).addClass("present");
    }
    }