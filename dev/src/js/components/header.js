/**
 * Header Component
 * Handles mobile menu toggle and dropdown interactions
 */

export class Header {
  constructor(element) {
    this.header = element;
    this.mobileMenu = document.getElementById('mobile-menu');
    this.mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    this.mobileToggle = this.header.querySelector('[aria-label="Menu"]');
    this.closeButton = document.getElementById('close-mobile-menu');
    this.mobileDropdownTriggers = this.header.querySelectorAll('.mobile-dropdown-trigger');

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.openMobileMenu());
    }

    // Close button
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.closeMobileMenu());
    }

    // Overlay click to close
    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.addEventListener('click', () => this.closeMobileMenu());
    }

    // Mobile dropdown toggles
    this.mobileDropdownTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        const dropdown = trigger.nextElementSibling;
        if (dropdown) {
          dropdown.classList.toggle('hidden');

          // Rotate arrow icon
          const arrow = trigger.querySelector('.arrow-icon');
          if (arrow) {
            arrow.style.transform = dropdown.classList.contains('hidden')
              ? 'rotate(0deg)'
              : 'rotate(180deg)';
          }
        }
      });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMobileMenuOpen()) {
        this.closeMobileMenu();
      }
    });

    // Close menu when clicking internal links
    if (this.mobileMenu) {
      this.mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          this.closeMobileMenu();
        });
      });
    }
  }

  openMobileMenu() {
    if (this.mobileMenu && this.mobileMenuOverlay) {
      this.mobileMenu.classList.remove('translate-x-full');
      this.mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }

  closeMobileMenu() {
    if (this.mobileMenu && this.mobileMenuOverlay) {
      this.mobileMenu.classList.add('translate-x-full');
      this.mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  isMobileMenuOpen() {
    return this.mobileMenu && !this.mobileMenu.classList.contains('translate-x-full');
  }
}
