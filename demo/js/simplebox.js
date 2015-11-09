'use strict';

(function ($) {
    $.fn.simplebox = function(options) {
        var settings = $.extend({
            fadeSpeed: 400,
            imgPath: "img",
            closeImg: "cross.svg",
            closeCrossAnimation: true,
        }, options);

        // Helper Variables
        var $body = $("body");
        var $overlay = $('<div id="overlay"></div>');
        var $cross = $('<img class="cross" src="' + settings.imgPath + "/" +settings.closeImg + '">');
        var $image = $("<img class='slb'>");
        var fadeSpeed = settings.fadeSpeed;

        // Function for hiding the overlay.
        var hideOverlay = function() {
            $overlay.fadeOut(fadeSpeed);
            if (settings.closeCrossAnimation) {
                $('.cross').addClass('cross-close');
            } else {
                $('.cross').hide(settings.fadeSpeed);
            }
            $image.removeClass('slb-opened');
        };

        // When X is clicked or user clicks on the overlay div
        // Hide lightbox
        $overlay.click(hideOverlay);
        $cross.click(hideOverlay);

        return this.each(function() {
            $("body").append($cross);
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

                if (settings.closeCrossAnimation) {
                    $('.cross').removeClass('cross-close');
                }

                $overlay.append($image);
                $body.append($overlay);

                // Show all the things!
                $overlay.fadeIn(fadeSpeed);
                $cross.show();
            });
        });
    };
}(jQuery));
