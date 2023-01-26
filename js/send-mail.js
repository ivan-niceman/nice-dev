// START FORM SEND MAIL

$(function () {
  $("#send-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts__massage")
        .addClass("active-form")
        .css("display", "flex")
        .hide()
        .fadeIn();
      $('.feedback__form')
        .hide()
        .fadeIn()
      setTimeout(function () {
        jQuery("#send-form").trigger("reset");
        $(".contacts__massage").removeClass("active-form").fadeOut();
        $('.content-form').removeClass('feedback__form').fadeOut();
      }, 3000);
    });
    return false;
  });
});

// $(function () {
//   $("#send-form-header").submit(function () {
//     $.ajax({
//       type: "POST",
//       url: "send-form-header.php",
//       data: $(this).serialize(),
//     }).done(function () {
//       $(".contacts__massage-header")
//         .addClass("active-form-header")
//         .css("display", "flex")
//         .hide()
//         .fadeIn();
//       setTimeout(function () {
//         jQuery("#send-form-header").trigger("reset");
//         $(".contacts__massage-header").removeClass("active-form-header").fadeOut();
//         $('.content-form').removeClass('feedback__form').fadeOut();
//       }, 3000);
//     });
//     return false;
//   });
// });

// END FORM SEND MAIL
