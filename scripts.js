
var randomFadeInElements = function () {

    var count = 0;
    var maxDelay = 1500;
    var minSpeed = 1500;
    var maxSpeed = 1000;
    var fadeTo = 1

    $('.cth').each(function () {
        $(this).fadeOut("slow", function () {
            var delay = Math.ceil(Math.random() * maxDelay);
            var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
            count++;
            $(this).delay(delay).fadeTo(speed, fadeTo, function () {
                count--;
            });
        });
            
    });
};

$(document).ready(function () {

    $(".tabs a").click(function () {
        randomFadeInElements();
    });

    $(document).on("click", "#download a", function () {
        var type = $(this).prop("class").split(' ')[0];
        ga('send', 'event', 'Download', 'Click', type);
    });

    $(".tooltipped").tooltip({ delay: 40 });

    $('.loader_img').show();

    $('.main-img').on('load', function () {
        $(this).fadeIn("slow");
        $('.loader_img').hide();

    });

    $(document).on("click", "#pocetna span[name=\"mailto:igor1982ster@gmail.com\"]", function () {
        location.href = "mailto:igor1982ster@gmail.com";
    });
});

$(window).load(function () {
    randomFadeInElements();
});



