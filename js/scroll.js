let toTop = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(toTop, 10);
  }
};

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 400) {
    document.querySelector('.scrollup').style.display = 'block';
  } else {
    document.querySelector('.scrollup').style.display = 'none';
  }
};
