var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {

    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) 
    {
        clearInterval(countdown);
        eleemtCountDown =  document.getElementById("countdown");
        eleemtCountDown.style.display = "none";
    element = document.getElementById("section");
    element.style.display = "block";
    elementRibbon = document.getElementById("ribbon");
    elementRibbon.style.display = "block";
}
}, 1000);

$('#videobtn').on('click', function() {
  $('#booksection').hide();
  $('#ribbon').hide();
  $(this).hide();
  $('#ytiframe').show()

});

$('.ribbon').on('click', function() {	

    var colors = ["#8b5642", "#6a696b"];
    var duration = 5 * 1000;
    var end = Date.now() + duration;
    function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 125,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 125,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }
    var self = $('.ribbon');
    self.fadeOut( "slow", function() {
    });

    var book = $('#book');
    book.addClass('book');


    frame();
});