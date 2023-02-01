const scroll = document.querySelector(".scrollup");
scroll.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};
