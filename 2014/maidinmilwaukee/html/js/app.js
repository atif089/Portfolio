jQuery(document).ready(function() {


    (function() {
        var $ = jQuery;

        //im ready
        $("header a").click(function() {
            var el = $(this);
            var elid = el.attr("href");
            var islocal = (elid.charAt(0) == "#");

            if (islocal) {

                $("html, body").animate({
                    scrollTop: $(elid).offset().top - 115
                }, 500);

                return false
            }
        });



        window.rot = function(s) {
            return s.replace(/[a-zA-Z]/g, function(c) {
                return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
            });
        }

        // contact
        $(".btn-submit").click(function() {

            var API_KEY = "0hBkqeNbkZWbqp7lCuid3j";
            // var API_KEY = "vj0iBCqmAPcXjRQL7jUVCj"; // test
            var m = new mandrill.Mandrill(rot(API_KEY));

            var params = {
                "message": {
                    "from_name": $("#from_name").val(),
                    "from_email": $("#from_email").val() || "do-not-reply@maidinmilwaukee.com",
                    "to": [{
                        "email": "atif089@gmail.com"
                    }],
                    "subject": $("#subject").val(),
                    "text": $("#message").val()
                }
            };

            $("#contact-response").hide();

            m.messages.send(params, function(res) {
                console.log(res);
                $("#contact-response").text("Your message has been received!");
                $("#contact-response").show();
            }, function(err) {
                $("#contact-response").text("There was an error sending your email! Please try again later.");
                $("#contact-response").show();
            });

            return false;
        });

    }());

});