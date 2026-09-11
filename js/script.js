document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.material-card__tab-btn');
  const tabContents = document.querySelectorAll('.material-card__content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {

      tabButtons.forEach(btn => {
        btn.classList.remove('material-card__tab-btn--active');
      });
      tabContents.forEach(content => {
        content.classList.remove('material-card__content--active');
      });

      button.classList.add('material-card__tab-btn--active');

      const btnId = button.getAttribute('data-tab');
      const contentId = document.getElementById(btnId);

      if (contentId) {
        contentId.classList.add('material-card__content--active');
      }
    });
  });
});