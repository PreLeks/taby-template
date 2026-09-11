const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    tabs.forEach(b => b.classList.remove('content__btn--active'));
    btn.classList.add('content__btn--active');

    contents.forEach(c => {
      c.classList.toggle('content__inner--active', c.dataset.tabContent === tab);
    });
  });
});