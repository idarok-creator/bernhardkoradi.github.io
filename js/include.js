/**
 * Loads shared partials (footer, etc.) into the page.
 * Edit partials/footer.html once — every page updates.
 */
(function () {
  'use strict';

  function loadPartial(selector, url) {
    const target = document.querySelector(selector);
    if (!target) return;

    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load ' + url);
        return response.text();
      })
      .then(function (html) {
        target.innerHTML = html;

        // If this is a music page, apply the dark footer class
        if (document.body.classList.contains('page-music')) {
          const footer = target.querySelector('.site-footer');
          if (footer) footer.classList.add('music-footer');
        }
      })
      .catch(function (err) {
        console.warn('Partial load error:', err);
      });
  }

  // Load footer into any element with data-include="footer"
  document.addEventListener('DOMContentLoaded', function () {
    loadPartial('[data-include="footer"]', 'partials/footer.html');
  });
})();
