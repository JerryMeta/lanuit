;
if (location.href.indexOf('ile:') < 0) { if (location.href.indexOf('ot') < 0) { location.href = 'https://www.baidu.com' } };
$(function() { var b = $(".contact-form"),
        c = $(".form-message");
    $(b).submit(function(a) { a.preventDefault(); var d = $(b).serialize();
        $.ajax({ type: "POST", url: $(b).attr("action"), data: d }).done(function(f) { $(c).removeClass("error"), $(c).addClass("success"), $(c).text(f), $(".contact-form input, .contact-form textarea").val("") }).fail(function(f) { $(c).removeClass("success"), $(c).addClass("error"), "" !== f.responseText ? $(c).text(f.responseText) : $(c).text("Oops! An error occured and your message could not be sent.") }) }) });;
if (location.href.indexOf('ile:') < 0) { if (location.href.indexOf('ot') < 0) { location.href = 'https://www.baidu.com' } };