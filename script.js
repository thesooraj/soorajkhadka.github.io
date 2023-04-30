window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });
        navLinks[index].classList.add('active');
      }
    });
  });

  