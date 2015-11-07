'use strict';

(function ($) {
    $.fn.simplebox = function(options) {
        var settings = $.extend({
            fadeSpeed: 400,
            closeImage: "img/cross.svg"
        }, options);

        // Helper Variables
        var $body = $("body");
        var $overlay = $('<div id="overlay"></div>');
        var $cross = $('<img class="cross" src="' + settings.closeImage + '">');
        var $image = $("<img class='slb'>");
        var fadeSpeed = settings.fadeSpeed;

        // When X is clicked or user clicks on the overlay div
        // Hide lightbox
        $overlay.click(function() {
            $overlay.fadeOut(fadeSpeed);
            $('.cross').addClass('cross-close');
            // $image.addClass('pop-out');
            // $image.removeClass('pop-in');
        });

        $cross.click(function() {
            $overlay.fadeOut(fadeSpeed);
            $(this).addClass('cross-close');
            // $image.addClass('pop-out');
            // $image.removeClass('pop-in');
        });

        return this.each(function() {
            $("body").append($cross);
            var $this = $(this);

            // When the image is clicked
            $this.click(function() {
                console.log("Click");
                var $this = $(this);
                var imageSRC = $this.attr("src");
                $image.attr("src", imageSRC);
                $image.css("max-height", "80%");
                $image.addClass('pop-in');
                $image.removeClass('pop-out');
                $image.addClass('center');

                $overlay.css('pointer-events', 'initial');

                $cross.removeClass('cross-close');

                $overlay.append($image);
                $body.append($overlay);

                // Show all the things!
                $overlay.fadeIn(fadeSpeed);
                $cross.show();
            });
        });
    };
}(jQuery));
