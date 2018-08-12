$(document).ready(function () {
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
});