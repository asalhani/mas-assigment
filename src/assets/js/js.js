$(document).ready(function () {
    var isFormOpened = false;
    var contactWrapper = $("#contactWrapper");
    var contactLink = $("#contactLink");
    var classToToggle = "show-contact";

    $(contactLink).click(function () {
        console.log("atest");
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