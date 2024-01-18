document.addEventListener('DOMContentLoaded', function () {
      animateCode();
    });

    function animateCode() {
      var codeElements = document.querySelectorAll('code');

      codeElements.forEach(function (codeElement, index) {
        setTimeout(function () {
          codeElement.classList.add('typing');

          setTimeout(function () {
            codeElement.classList.remove('typing');
          }, 3000); // Adjust the duration if needed
        }, index * 3500); // Unique delay for each element
      });
    }
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



document.addEventListener('DOMContentLoaded', function() {
   
    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    }


    setInterval(updateClock, 1000);

    updateClock();
});











