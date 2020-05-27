// SideBar
$(document).ready(function () {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#collapse-sidebar").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("collapse-content");
    $("#Header").toggleClass("collapse-header");
  });

  //   $("#sidebar ul li.active").on("click", function () {
  //     // $("#hideicon").toggleClass("active");
  //     $(".submenu").toggleClass("active");
  //   });
})(jQuery);
