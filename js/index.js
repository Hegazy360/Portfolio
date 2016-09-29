$(document).ready(function() {
  $(function() {
    $('a[href*="#"]:not([href="#carousel"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  var $contactForm = $('.contact-form');
  $contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: '//formspree.io/m.hegazy94@hotmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        // $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        $(".submit").text("Sending");
        $(".submit").css("background-color", "#f1c40f");

      },
      success: function(data) {
        // $contactForm.find('.alert--loading').hide();
        // $contactForm.append('<div class="alert alert--success">Message sent!</div>');
        $(".submit").text("Success!");
        $(".submit").css("background-color", "#27ae60");
        $contactForm.get(0).reset();
      },
      error: function(err) {
        // $contactForm.find('.alert--loading').hide();
        $(".submit").text("Error!");
        $(".submit").css("background-color", "#e74c3c");
      }
    });
  });

  $(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

});