'use strict';

(function ($) {
    $.fn.simplebox = function(options) {
        var settings = $.extend({
            fadeSpeed: 400
        }, options);

        // Helper Variables
        var $body = $("body");
        var $overlay = $('<div id="overlay"></div>');
        var $cross = $('<div class="cross"></div>');
        var $image = $("<img class='slb'>");
        var fadeSpeed = settings.fadeSpeed;

        // Function for hiding the overlay.
        var hideOverlay = function() {
            $overlay.fadeOut(fadeSpeed);
            $image.removeClass('slb-opened');
        };

        // When X is clicked or user clicks on the overlay div
        // Hide lightbox
        $overlay.click(hideOverlay);
        $cross.click(hideOverlay);

        return this.each(function() {
            $overlay.append($cross);
            var $this = $(this);

            // When the image is clicked
            $this.click(function() {
                var $this = $(this);
                var imageSRC = $this.attr("src");
                $image.attr("src", imageSRC);
                $image.css("max-height", "80%");
                $image.addClass('pop-in');
                $image.removeClass('pop-out');
                $image.addClass('center');
                $image.addClass('slb-opened');

                $overlay.css('pointer-events', 'initial');

                $overlay.append($image);
                $body.append($overlay);

                // Show all the things!
                $overlay.fadeIn(fadeSpeed);
            });
        });
    };
}(jQuery));
