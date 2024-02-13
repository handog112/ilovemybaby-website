$(document).ready(function() {

    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_next = $("#next"); // Changed button ID to "next"
 

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_next.click(function() {
        // Redirect to the next page of the website
        window.location.href = "cutemo.html"; // Replace "next_page.html" with the URL of the next page
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    function goToNextPage(){
        // Redirect to the next page of the website
        window.location.href = "pili.html"; // Replace "cutemo.html" with the URL of the next page
    }
});