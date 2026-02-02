<script>
  const sanitizeSelectedPublications = () => {
    const section = document.querySelector('#papers');
    if (!section) {
      return;
    }

    // Remove Cite buttons or any clickable action buttons
    section.querySelectorAll('[data-toggle="modal"], .btn, .publication-links, .pub-icon-button').forEach((el) => {
      if (el.closest('.pub-list-item')) {
        el.remove();
      }
    });

    // Replace remaining anchor text with spans to remove hyperlinks
    section.querySelectorAll('.pub-list-item a').forEach((a) => {
      if (!a.classList.contains('nav-link')) {
        const span = document.createElement('span');
        span.textContent = a.textContent;
        a.replaceWith(span);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sanitizeSelectedPublications);
  } else {
    sanitizeSelectedPublications();
  }

  document.addEventListener('htmx:afterSwap', sanitizeSelectedPublications);
</script>