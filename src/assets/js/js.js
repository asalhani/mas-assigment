$(document).ready(function () {
    var isFormOpened = false;
    var contactWrapper = $("#contactWrapper");
    var contactLink = $("#contactLink");
    var classToToggle = "show-contact";
    var notCachedClass = ".not-cached";

    // navigation links
    $('#menu li a').on('click', function (e) {
        e.preventDefault();
        var $to = this.getAttribute('href');
        $('body, html').animate({
            scrollTop: $($to).offset().top
        });
        $('header').removeClass('openMenu');
    });

    // toggle (show/hide) toUp button
    $(window).on('scroll',function(){
        console.log(window.pageYOffset);
        if (window.pageYOffset > 200 ) {
            $('#toUp').css('opacity',1);
        } else {
            $('#toUp').css('opacity',0);
        }
    })

    // toUp handler
    $('#toUp').on('click',function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop : 0
        });
    });

    // append guid to prevent image cache
    $(notCachedClass).each(function(index){
        $(this).attr("src", $(this).attr('src') + "?" + generateGuid());
    });

    // open protection modal on link click
    $("#protectionLink").click(function(e){
        e.preventDefault();
        $("#dataProtectionModal").modal();
    });

    // toggle (open/close) contact sidebar
    $(contactLink).click(function (e) {
        e.preventDefault();
        $(contactWrapper).toggleClass(classToToggle);
    });

    // close contactWrapper if we clicked anywhere outside it
    $(document).mouseup(function (e) {
        if (!contactWrapper.is(e.target) // if the target of the click isn't the container...
            && contactWrapper.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(contactWrapper).removeClass(classToToggle);
        }
    });

    $("#btnShowForm").click(function () {
        // show the form
        $("#order-form").removeClass("hide");

        // change button text to "submit
        $("#btnShowForm").addClass('hide');
    });

    $('#order-form').submit(function (evt) {
        evt.preventDefault();

        var isValid = false;

        // get input value and check it
        var pharmacy = $("#pharmacy").val();
        var name = $("#firstName").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var pledgeValue = $("#pledge").is(':checked');

        if (pharmacy === '' ||
            name === '' ||
            email === '' ||
            message === '' ||
            pledgeValue === false)
            return false;

        $('#order-form').trigger("reset");

        $("#order-form").addClass("hide");

        // change button text to "submit
        $("#btnShowForm").removeClass('hide');

    });
});

function submitOrder() {
    $('#order-form').submit();
}

function generateGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }