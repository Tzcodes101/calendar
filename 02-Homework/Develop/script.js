

$(document).ready(function () {

    // add current day and date with moments to #currentDay
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
        localStorage.setItem(text, scheduleHour);
        //call readFromLocalStorage
    })
    timeTracker();
    //we must keep track of the time as it progresses with a timeTracker function
    function timeTracker () {
        //that obtains the current hour
        var currentHour = moment().hours();
        console.log(currentHour);

        //in a for each loop for each timeblock
        $(".time-block").each(function () {
            //checks to see if we've moved past this time
            
            //changing class to past present or future accordingly, based on comparison to current hour (,, === or =,=, ===)
        })       
    }

    //Set time to update every 20 seconds

    //load any stored data from local storage to the page 





});










