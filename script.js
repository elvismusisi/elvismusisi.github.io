

document.getElementById("enterBtn").addEventListener("click", function() {
    window.location.href = "landing.html";
});


    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    });


    // Add this JavaScript file and link it in your HTML file

document.addEventListener('DOMContentLoaded', function() {
    // Function to update the clock
    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Format the time with leading zeros
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Display the time in the "clock" element
        document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();
});











