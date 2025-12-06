document.addEventListener('DOMContentLoaded', function () {
    console.log('LegerLAB Custom JS Loaded');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('[aria-label="Menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    function toggleMobileMenu() {
        if (mobileMenu) {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Mobile Dropdowns
    const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');

    mobileDropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow-icon');

            if (content) {
                content.classList.toggle('hidden');
                if (arrow) {
                    arrow.textContent = content.classList.contains('hidden') ? '▼' : '▲';
                }
            }
        });
    });

    // Desktop Dropdowns (Hover)
    // Not strictly needed if using CSS :hover, but if we want click/focus support:
    const desktopDropdowns = document.querySelectorAll('.desktop-dropdown-trigger');
    desktopDropdowns.forEach(trigger => {
        // Optional: Add click handling or leave to CSS hover
    });

});
