(function () {
    var squareWrapper = document.querySelector('.header');
    var square = squareWrapper.querySelector('.navigation');
    square.classList.remove('navigation-transition');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          square.classList.add('navigation-transition');
          return;
        }
  
        square.classList.remove('navigation-transition');
      });
    });
  
    observer.observe(squareWrapper);
  })();