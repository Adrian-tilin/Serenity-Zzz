const container = document.querySelector('.container');
const text = document.querySelector('#text');

const baseTotal = 7500; // ciclo base ms
let difficultyMultiplier = 1; // multiplicador dificultad
let totalTime = baseTotal * difficultyMultiplier;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

const pointerContainer = document.querySelector('.pointer-container');
// inicializa duración del puntero y animaciones
const updatePointerDuration = () => {
  // una vuelta del puntero = totalTime
  const seconds = totalTime / 1000;
  if (pointerContainer) pointerContainer.style.setProperty('--pointer-duration', `${seconds}s`);
  // grow/shrink igual a breatheTime
  const growSec = (breatheTime || (totalTime / 5) * 2) / 1000;
  if (container) {
    container.style.setProperty('--grow-duration', `${growSec}s`);
    container.style.setProperty('--shrink-duration', `${growSec}s`);
  }
};
updatePointerDuration();

let cycleTimeouts = [];
let running = false;
let spinCount = 0;
let inactivityTimer = null;
let hasMoved = false;
let firstShown = true;

// iniciar ciclo de respiración
function startBreathing() {
  if (running) return;
  running = true;
  container.classList.add('running');
  // indicar movimiento
  hasMoved = true;

  // ocultar mensaje si está visible
  const contMsg = document.querySelector('#continueMsg');
  if (contMsg) {
    contMsg.classList.remove('visible');
    contMsg.setAttribute('aria-hidden', 'true');
  }

  // ocultar mensaje inicial (solo 1ª vez)
  if (firstShown) { firstShown = false; }

  // reset timer inactividad
  if (inactivityTimer) { clearTimeout(inactivityTimer); inactivityTimer = null; }

  // arrancar ciclo
  runCycle();
}

// detener respiración
function stopBreathing() {
  running = false;
  container.classList.remove('running');
  // limpiar timeouts pendientes
  cycleTimeouts.forEach(id => clearTimeout(id));
  cycleTimeouts = [];
  // reset texto y clases
  text.innerText = '';
  container.className = 'container';

  // timer inactividad 3s -> mostrar mensaje
  if (inactivityTimer) clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    const contMsg = document.querySelector('#continueMsg');
    if (contMsg) {
      contMsg.classList.add('visible');
      contMsg.setAttribute('aria-hidden', 'false');
    }
    inactivityTimer = null;
  }, 3000);

  // si hubo movimiento, reproducir animación rápida
  if (hasMoved) {
    // usar pulse (latido)
    container.classList.add('pulse');
    const onEnd = (e) => {
      // limpiar clases de animación
      container.classList.remove('pulse');
      container.classList.remove('rebound');
      container.removeEventListener('animationend', onEnd);
    };
    container.addEventListener('animationend', onEnd);
    // reset moved flag after the release
    hasMoved = false;
  }
}

// ciclo de respiración (un ciclo)
function runCycle() {
  if (!running) return;

  // inhala
  text.innerHTML = 'Inhala';
  container.classList.remove('shrink');
  container.classList.add('grow');

  // después de breatheTime -> mantener
  const t1 = setTimeout(() => {
    if (!running) return;
    text.innerText = 'Mantén';

    // después de holdTime -> exhala
    const t2 = setTimeout(() => {
      if (!running) return;
      text.innerText = 'Exhala';
      container.classList.remove('grow');
      container.classList.add('shrink');

      // después de breatheTime iniciar siguiente ciclo
      const t3 = setTimeout(() => {
        if (!running) return;
        runCycle();
      }, breatheTime);
      cycleTimeouts.push(t3);
    }, holdTime);

    cycleTimeouts.push(t2);
  }, breatheTime);

  cycleTimeouts.push(t1);
}

// puntero: start/stop con mouse/touch
container.addEventListener('mousedown', (e) => {
  e.preventDefault();
  startBreathing();
});
container.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startBreathing();
}, { passive: false });

['mouseup', 'mouseleave'].forEach(evt => {
  container.addEventListener(evt, () => stopBreathing());
});

['touchend', 'touchcancel'].forEach(evt => {
  container.addEventListener(evt, () => stopBreathing());
});

// tecla espacio: alternar
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (running) stopBreathing(); else startBreathing();
  }
});

// contar giros (animationiteration)
const spinCountEl = document.querySelector('#spinCount');
if (pointerContainer) {
  pointerContainer.addEventListener('animationiteration', () => {
    // contar solo si running
    if (!running) return;
    spinCount += 1;
    if (spinCountEl) spinCountEl.innerText = `Giros: ${spinCount}`;
  });
}

// cancelar timer inactividad al presionar
['mousedown', 'touchstart'].forEach(evt => {
  container.addEventListener(evt, () => {
    if (inactivityTimer) { clearTimeout(inactivityTimer); inactivityTimer = null; }
    // also hide the continue message on press
    const contMsg = document.querySelector('#continueMsg');
    if (contMsg) { contMsg.classList.remove('visible'); contMsg.setAttribute('aria-hidden', 'true'); }
  });
});

// selector dificultad
const difficultySelect = document.querySelector('#difficulty');
if (difficultySelect) {
  difficultySelect.addEventListener('change', (e) => {
    const val = parseFloat(e.target.value) || 1;
    difficultyMultiplier = val;
    // recalcular tiempos
    totalTime = baseTotal * difficultyMultiplier;
    breatheTime = (totalTime / 5) * 2;
    holdTime = totalTime / 5;
    updatePointerDuration();

    // si corre, reiniciar ciclo para sincronizar
    if (running) {
      cycleTimeouts.forEach(id => clearTimeout(id));
      cycleTimeouts = [];
      runCycle();
    }
  });
}

// mostrar mensaje inicial al cargar
window.addEventListener('load', () => {
  const contMsg = document.querySelector('#continueMsg');
  if (contMsg) { contMsg.classList.add('visible'); contMsg.setAttribute('aria-hidden', 'false'); }
});
