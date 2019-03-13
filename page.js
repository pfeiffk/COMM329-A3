var slideIndex = 1;

showSlides(slideIndex);

function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "top") {
    x.className += " responsive";
  } else {
    x.className = "top";
  }
}

function plus(n) {
  showSlides(slideIndex += n);
}

function current(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var selector = document.getElementsByClassName("selector");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
      selector[i].className = selector[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  selector[slideIndex-1].className += " active";
}


//***********jQUERY*********************
$(".grid-item").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});
$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});
