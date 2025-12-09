/**
 * Smooth Scroll Component
 * Enables smooth scrolling for anchor links
 */

export class SmoothScroll {
  constructor(element) {
    this.container = element;
    this.init();
  }

  init() {
    // Find all anchor links within the container
    const anchorLinks = this.container.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Skip empty or just # links
        if (!href || href === '#') return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Update URL without triggering scroll
          if (window.history && window.history.pushState) {
            window.history.pushState(null, null, href);
          }
        }
      });
    });
  }
}
