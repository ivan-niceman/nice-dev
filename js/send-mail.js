// START FORM SEND MAIL

// form header //

$(document).ready(function () {
  $("#form-header").submit(function () {

    $.ajax({
      type: "POST",
      url: "send-form-header.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts__massage")
        .addClass("active-form")
        .css("display", "flex")
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery("#form-header").trigger("reset");
        $(".contacts__massage").removeClass("active-form").fadeOut();
      }, 2000);
    });
    return false;
  });
});

// form popup //

$(document).ready(function () {
  $("#form-popup").submit(function () {

    $.ajax({
      type: "POST",
      url: "form-popup.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts__massage")
        .addClass("active-form")
        .css("display", "flex")
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery("#form-popup").trigger("reset");
        $(".contacts__massage").removeClass("active-form").fadeOut();
      }, 2000);
    });
    return false;
  });
});

// END FORM SEND MAIL
