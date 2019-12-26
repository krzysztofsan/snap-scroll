(function() {
  const sections = document.getElementsByClassName('section');
  const heightConstraint = (window.innerHeight || document.documentElement.clientHeight) / 2;

  function adjustVisibility() {

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionRect = section.getBoundingClientRect();
      
      if (
        sectionRect.top >= -heightConstraint &&
        sectionRect.bottom <= 3 * heightConstraint
      ) {
        section.classList.add('visible')
      } else {
        section.classList.remove('visible')
      }
    }
  }

  document
    .getElementById('container')
    .addEventListener('scroll', adjustVisibility);

  adjustVisibility();

})()
