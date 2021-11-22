/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// Inicializando Scripts de materialize
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidenav').forEach((sideNav) => {
    /* eslint-disable no-alert */
    M.Sidenav.init(sideNav);
  });

  // Inicializando el dropdown
  document
    .querySelectorAll('.dropdown-trigger')
    /* eslint-disable no-alert */
    .forEach((dropdown) => M.Dropdown.init(dropdown));
});
