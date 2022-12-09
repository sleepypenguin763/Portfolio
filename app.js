var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".fadeIn");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});