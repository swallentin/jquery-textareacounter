/*
 * jquery-textareacounter
 * https://github.com/stephanwallentin/jquery-textareacounter
 *
 * Copyright (c) 2012 swallentin
 * Licensed under the MIT, GPL licenses.
 */

(function($) {


    $.fn.textareacounter = function (options) {

        options = options || {
            maxlength: 20
        };

        return this.each(function () {

            var $this, remainingLength, $target, maxlength;

            $this = $(this);
            $target = $this.attr("data-counter-target");
            maxlength = $this.attr("maxlength") || options.maxlength;
            $target = $($target);

            // Pre fill the target element with the default length
            $target.text(maxlength);

            $this.keyup(function () {
                remainingLength = maxlength - $this.val().length;

                $target.text(remainingLength);

            });
        });
    };


}(jQuery));
