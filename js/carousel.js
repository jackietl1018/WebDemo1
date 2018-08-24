$(document).ready(function(e) {

    var unslider = $('#carousel').unslider({

            dots: true

        }),

        data = unslider.data('unslider');



    $('.unslider-arrow').click(function() {

        var fn = this.className.split(' ')[1];

        data[fn]();

    });

});