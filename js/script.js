var nav = document.querySelector('nav');
var header = document.querySelector('header');

      window.addEventListener("scroll", function(){
        nav.classList.toggle("abajo", window.scrollY>650);
      })