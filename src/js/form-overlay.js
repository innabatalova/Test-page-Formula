const $ = require("jquery");

$(".offer__button").on("click", function () {
  $(".form-overlay").show();
});

$(".form-overlay__exit").on("click", function () {
  $(".form-overlay").hide();
});

//закрытие модельного окна по клику снаружи
$(document).on("mouseup", function (e) {
  let formOverlay = $(".form-overlay");

  if (!formOverlay.is(e.target) && formOverlay.has(e.target).length === 0) {
    formOverlay.hide();
  }
});
