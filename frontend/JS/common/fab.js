
(function () {
  try {
    var path = (location.pathname || '').replace(/\\/g, '/').toLowerCase();

    if (document.querySelector('.fab-menu')) return;


    var pagesIdx = path.indexOf('/pages/');
    var relToPages = 'Pages/';
    var relToRoot = '';
    if (pagesIdx !== -1) {
      var after = path.slice(pagesIdx + 7);
      var depth = (after.match(/\//g) || []).length;
      relToPages = '../'.repeat(depth + 1) + 'Pages/';
      relToRoot = '../'.repeat(depth + 1);
    }


    var assetsPrefix = relToRoot + 'assets';
    var cssPrefix = relToRoot + 'CSS';
    var basePages = relToPages;
    var homeHref = relToRoot + 'index.html';
    var minijuegosHref = relToPages + 'Select.html';

    window.relToRoot = relToRoot;
    window.basePages = basePages;
    
    var cssHref = cssPrefix + '/common/fab.css';
    if (!document.querySelector('link[rel="stylesheet"][href$="CSS/common/fab.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssHref;
      document.head.appendChild(link);
    }

  
    var fab = document.createElement('div');
    fab.className = 'fab-menu';
    fab.innerHTML = [
      '<button id="fab-toggle" class="fab-button" aria-label="Abrir menú rápido" aria-controls="quick-panel" aria-expanded="false">',
      '  <span class="icon-logo" aria-hidden="true">',
      '    <img class="fab-logo" src="' + assetsPrefix + '/img/Select/Iconos/logo2.0.webp" alt="Logo Serenity"/>',
      '  </span>',
      '</button>',
      '<nav id="quick-panel" class="quick-panel" aria-hidden="true" role="menu" aria-label="Menú rápido">',
      '  <ul>',
      '    <li>',
      '      <a href="' + basePages + 'Equipo.html" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/Equipo.png" alt="EQUIPO"/></span>',
      '        <span class="text" style="color: black !important;">EQUIPO</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="' + basePages + 'information.html" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/informacion.png" alt="INFORMACION"/></span>',
      '        <span class="text" style="color: black !important;">INFORMACION</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="' + basePages + 'Terminos.html" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/terminos.png" alt="TERMINOS DE USO"/></span>',
      '        <span class="text" style="color: black !important;">TERMINOS DE USO</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="#perfil" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/perfil.png" alt="PERFIL"/></span>',
      '        <span class="text" style="color: black !important;">PERFIL</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="' + homeHref + '" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/inicio.png" alt="INICIO"/></span>',
      '        <span class="text" style="color: black !important;">INICIO</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="' + minijuegosHref + '" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/Minijuegos.png" alt="MINIJUEGOS"/></span>',
      '        <span class="text" style="color: black !important;">MINIJUEGOS</span>',
      '      </a>',
      '    </li>',
      '    <li>',
      '      <a href="' + basePages + 'Archivos.html" role="menuitem">',
      '        <span class="icon" aria-hidden="true"><img src="' + assetsPrefix + '/img/Select/Iconos/ARCHIVOS.png" alt="ARCHIVOS"/></span>',
      '        <span class="text" style="color: black !important;">ARCHIVOS</span>',
      '      </a>',
      '    </li>',
      '  </ul>',
      '</nav>'
    ].join('\n');

    document.body.appendChild(fab);

    
    const perfilLink = fab.querySelector('a[href="#perfil"]');
    if (perfilLink) {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      if (token && user) {
        perfilLink.href = basePages + 'Perfil/perfil-edit.html';
      } else {
        perfilLink.href = basePages + 'login-register.html';
      }
    }

    var $fabMenu = fab;
    var $fabBtn = fab.querySelector('#fab-toggle');
    var $panel = fab.querySelector('#quick-panel');

    function closePanel() {
      $fabMenu.classList.remove('open');
      if ($fabBtn) $fabBtn.setAttribute('aria-expanded', 'false');
      if ($panel) $panel.setAttribute('aria-hidden', 'true');
    }
    function openPanel() {
      $fabMenu.classList.add('open');
      if ($fabBtn) $fabBtn.setAttribute('aria-expanded', 'true');
      if ($panel) $panel.setAttribute('aria-hidden', 'false');
    }

    if ($fabBtn) {
      $fabBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($fabMenu.classList.contains('open')) closePanel();
        else openPanel();
      });
    }

   
    document.addEventListener('click', function (e) {
      if ($fabMenu.classList.contains('open') && !fab.contains(e.target)) {
        closePanel();
      }
    });


    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });

 
    updateLoginButton();
  } catch (err) {
    console && console.warn && console.warn('FAB injection failed:', err);
  }
})();


updateLoginButton();


function updateLoginButton() {
  const loginBtn = document.getElementById('btn-login');
  if (!loginBtn) return;


  const path = (location.pathname || '').replace(/\\/g, '/').toLowerCase();
  let relToPages = 'Pages/';
  let relToRoot = '';
  const pagesIdx = path.indexOf('/pages/');
  if (pagesIdx !== -1) {
    const after = path.slice(pagesIdx + 7);
    const depth = (after.match(/\//g) || []).length;
    relToPages = '../'.repeat(depth);
    relToRoot = relToPages + '../';
  }

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (token && user) {

    const link = document.createElement('a');
    link.className = loginBtn.className;
    link.innerHTML = `
      <span class="icon-user" aria-hidden="true">
        <img class="login-logo" src="${relToRoot}assets/img/Select/Iconos/perfil.png" alt="Usuario"/>
      </span>
      <span class="label">${user.username}</span>
    `;
    link.href = relToPages + 'Perfil/Perfil-edit.html';
    link.style.textDecoration = 'none';
    loginBtn.parentNode.replaceChild(link, loginBtn);
  } else {

    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = relToPages + 'login-register.html';
    });
  }
}