$(document).ready(function () {

    

    $(".saveBtn").on("click", function () {
        //alert for saved button for "description"
        alert('Your information is saved!')


        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to local
        localStorage.setItem(time, text);
    })


    $("#block1 .description").val(localStorage.getItem("block1"));
    $("#block2 .description").val(localStorage.getItem("block2"));
    $("#block3 .description").val(localStorage.getItem("block3"));
    $("#block4 .description").val(localStorage.getItem("block4"));

    /// block 5 not listed so has standard lunch hour daily

    $("#block6 .description").val(localStorage.getItem("block6"));
    $("#block7 .description").val(localStorage.getItem("block7"));
    $("#block8 .description").val(localStorage.getItem("block8"));
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));



    function currentHour() {
        // inspired by https://stackoverflow.com/questions/27978819/extract-time-from-moment-js-object
        const now = moment()
        now.format("hh:mm:") 
        

        

        
        $(".time-block").each(function () {
            var blockHour = "hour"
           


            // style.css for class names
            // past grey
            // current red
            // future green

            if (blockHour < now) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour = now) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    currentHour();




    // current day and time at top of scheduler
    $("#currentDay").text(moment().format('LT'));



});
