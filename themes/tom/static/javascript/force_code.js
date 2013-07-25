$(function() {
    if (typeof disableStyleCode != "undefined")
    {
        return;
    }
    var a = false;
    $("code").each(function()
    {
        if (!$(this).hasClass("prettyprint"))
        {
            $(this).addClass("prettyprint");
            a = true
        }
    });
    if (a) { prettyPrint() }
});
