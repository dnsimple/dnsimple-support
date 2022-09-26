document.addEventListener('DOMContentLoaded', (event) => {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('#content');

  // show sidebar
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('is-active');
    content.classList.toggle('o-30');
  });

  // click-away
  content.addEventListener('click', (event) => {
    if (sidebar.classList.contains('is-active') && !event.target.classList.contains('sidebar-toggle')) {
      sidebar.classList.toggle('is-active');
      content.classList.toggle('o-30');
    }
  });
});
