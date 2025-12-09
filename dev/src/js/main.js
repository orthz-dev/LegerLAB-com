/**
 * Main JavaScript Entry Point for Shopify Theme
 * Pattern: Component Auto-Initialization based on data-component attributes
 */

import { Header } from './components/header.js';
import { SmoothScroll } from './components/smooth-scroll.js';

// Component registry
const COMPONENTS = {
  Header,
  SmoothScroll,
};

/**
 * Initialize all components on page load
 */
function initComponents() {
  document.querySelectorAll('[data-component]').forEach((element) => {
    const componentName = element.dataset.component;

    if (COMPONENTS[componentName]) {
      try {
        new COMPONENTS[componentName](element);
      } catch (error) {
        console.error(`Failed to initialize component: ${componentName}`, error);
      }
    } else {
      console.warn(`Component not found: ${componentName}`);
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents);
} else {
  initComponents();
}

// Export for potential external use
export { initComponents };
