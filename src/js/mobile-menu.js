const $ = require("jquery");

$(".header__mobile").on("click", function () {
  $(".mobile-menu").show();
});

$(".mobile-menu__nav__dot").on("click", function () {
  $(".mobile-menu").hide();
});
