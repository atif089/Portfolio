jQuery(document).ready(function() {


    (function() {
        var $ = jQuery;
        $('.selectpicker').selectpicker({
            size: "auto"
        });


        $('#appt-datepicker').datepicker({
            beforeShowDay: $.datepicker.noWeekends,
            nextDate: "a",
            minDate: 0
        });



        $('.appointment-scheduler-widget .scheduler-widget-next').click(function() {
            $(this).prev().find('ul').css({
                marginTop: "-=30"
            });
        });

        $('.appointment-scheduler-widget .scheduler-widget-prev').click(function() {
            $(this).next().find('ul').css({
                marginTop: "+=30"
            });
        });
    }());

});