/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// Inicializando Scripts de materialize
document.addEventListener('DOMContentLoaded', ()=>{
    const sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
});
