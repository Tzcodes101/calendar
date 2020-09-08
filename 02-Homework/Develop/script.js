

$(document).ready(function () {

    // add current day and date with moment js to #currentDay
    const currentDate = moment().format("MMM Do YYYY");
    $("#currentDay").append(currentDate);

    // When we click on the save button
    $(".saveBtn").on("click", function () {
        //get the value of the textarea sibling
        var text = $(this).siblings(".description").val();
        //keep track of the scheduleHour by noting the id of the parent (which was set in html)
        var scheduleHour = $(this).parent().attr("id");

        // Trim text, trim schedule hour
        text.trim();
        scheduleHour.trim();

        //save both of these values to local storage
        localStorage.setItem(scheduleHour, text);
        
    });
    
    //we must keep track of the time as it progresses with a timeTracker function
    function timeTracker() {
        //that obtains the current hour
        var currentHour = moment().hours();
        console.log(currentHour);

        //in a for each loop for each timeblock
        $(".time-block").each(function () {
            //checks to see if we've moved past this time, using the id of the time block (must change it to a number)
            let trackHour = parseInt($(this).attr("id"));
            console.log(trackHour);

            //if we have moved past the current hour
            if (trackHour < currentHour) {
                //change class to past
                $(this).addClass("past");

            } // or if we are on the current hour, change it to present
            else if (trackHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } // or if it is still in the future, change class to future
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        })
    };

    //Set time to update every 20 seconds
    var interval = setInterval(timeTracker, 20000);

    //load any stored data from local storage to the page 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

});










