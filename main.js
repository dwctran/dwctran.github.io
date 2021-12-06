let slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    gutter: 2,
    // fixedWidth: 200,
    edgePadding: 40,
    // center: true
  });

  function updateList() {
    var titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
  
    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
    
    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
  }
  
  updateList();
  window.addEventListener('scroll', () => {
      updateList();
  });
