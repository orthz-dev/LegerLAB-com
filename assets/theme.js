/**
 * LegerLAB Theme JavaScript
 */

(function () {
    'use strict';

    // Initialize theme
    document.addEventListener('DOMContentLoaded', function () {
        console.log('LegerLAB Theme Loaded');

        // Add any theme-specific JavaScript here
        initMobileMenu();
    });

    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function () {
                mobileMenu.classList.toggle('active');
            });
        }
    }

})();
