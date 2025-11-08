'use strict';
(() => {
  // Configuración del API - CAMBIAR SEGÚN TU ENTORNO
  const API_URL = 'http://127.0.0.1:8000'; // Para desarrollo local
  // const API_URL = 'https://serenity-backend-78rn.onrender.com'; // Para producción

  document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App iniciada');
    console.log('📡 API URL:', API_URL);

    // Elementos del DOM
    const fileInput = document.getElementById('avatarInput');
    const preview = document.getElementById('avatarPreview');
    const fileName = document.getElementById('fileName');
    const btnUpload = document.getElementById('btnUpload');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const aboutInput = document.getElementById('about');
    const logoutBtn = document.getElementById('logoutBtn');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Verificar autenticación
    const token = localStorage.getItem('token');
    console.log('🔐 Token encontrado:', token ? 'Sí' : 'No');
    
    if (!token) {
      alert('No estás autenticado. Redirigiendo al login...');
      window.location.href = '../login-register.html';
      return;
    }

    // Probar conexión con el servidor
    testServerConnection();

    // Animaciones de entrada
    const avatarStack = document.querySelector('.avatar-stack');
    if (avatarStack && !avatarStack.classList.contains('animate-in')) {
      avatarStack.classList.add('animate-in');
    }
    const reveal = document.querySelectorAll('.animate-in');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        }
      }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
      reveal.forEach(el => io.observe(el));
    } else {
      reveal.forEach(el => el.classList.add('in'));
    }

    // Cargar perfil del usuario
    loadUserProfile();

    // Manejar cambio de archivo (solo preview, no upload automático)
    if (fileInput && preview) {
      fileInput.addEventListener('change', () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) {
          if (fileName) fileName.textContent = 'Ningún archivo seleccionado';
          return;
        }

        const isImage = file.type ? file.type.startsWith('image/') : true;
        if (file.size > 10 * 1024 * 1024) {
          alert('La imagen es muy grande (máx 10 MB).');
          fileInput.value = '';
          if (fileName) fileName.textContent = 'Ningún archivo seleccionado';
          return;
        }
        if (!isImage) {
          alert('Selecciona un archivo de imagen.');
          fileInput.value = '';
          if (fileName) fileName.textContent = 'Ningún archivo seleccionado';
          return;
        }

        const url = URL.createObjectURL(file);
        preview.onload = () => {
          URL.revokeObjectURL(url);
        };
        preview.src = url;
        if (fileName) fileName.textContent = file.name;
        pulse(preview);
        ring(preview);
      });
    }

    // Botón para seleccionar archivo
    if (btnUpload) {
      btnUpload.addEventListener('pointerdown', (ev) => {
        ripple(btnUpload, ev.clientX, ev.clientY);
      });
      btnUpload.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          const r = btnUpload.getBoundingClientRect();
          ripple(btnUpload, r.left + r.width / 2, r.top + r.height / 2);
        }
      });
      btnUpload.addEventListener('click', () => fileInput?.click());
    }

    // Animación de burbujas
    if (!reduce) {
      const bubbles = document.querySelectorAll('.bg-scene .bubble');
      bubbles.forEach((b, i) => {
        const extra = Math.random() * 4;
        b.style.animationDuration = `calc(10s + ${(i * 0.4).toFixed(2)}s + ${extra.toFixed(2)}s)`;
        b.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
      });
    }

    // Crear botón "Guardar Cambios"
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Guardar Cambios';
    saveBtn.className = 'button';
    saveBtn.style.cssText = 'background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin-right: 10px;';
    
    // Insertar antes del botón de logout
    if (logoutBtn && logoutBtn.parentElement) {
      logoutBtn.parentElement.insertBefore(saveBtn, logoutBtn);
    }

    // Evento guardar cambios
    saveBtn.addEventListener('click', async function() {
      try {
        console.log('💾 Guardando cambios...');
        saveBtn.disabled = true;
        saveBtn.textContent = 'Guardando...';

        // 1. Si hay una nueva imagen, subirla primero
        if (fileInput.files && fileInput.files.length > 0) {
          console.log('📸 Subiendo imagen...');
          const file = fileInput.files[0];
          const formData = new FormData();
          formData.append('avatar', file);

          const uploadResponse = await fetch(`${API_URL}/api/upload/avatar`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formData
          });

          console.log('📸 Upload status:', uploadResponse.status);

          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            console.error('❌ Upload error:', errorData);
            throw new Error(errorData.detail || 'Error al subir imagen');
          }

          const uploadResult = await uploadResponse.json();
          console.log('✅ Upload success:', uploadResult);
          preview.src = uploadResult.imageUrl;
          
          // Actualizar usuario en localStorage
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          user.profile_image = uploadResult.imageUrl;
          localStorage.setItem('user', JSON.stringify(user));

          // Limpiar input
          fileInput.value = '';
          if (fileName) fileName.textContent = 'Ningún archivo seleccionado';
        }

        // 2. Actualizar "Sobre mí"
        console.log('📝 Actualizando perfil...');
        const about_me = aboutInput.value.trim();

        const profileResponse = await fetch(`${API_URL}/api/auth/profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ about_me })
        });

        console.log('📝 Profile update status:', profileResponse.status);

        if (!profileResponse.ok) {
          const errorData = await profileResponse.json();
          console.error('❌ Profile update error:', errorData);
          throw new Error(errorData.detail || 'Error al actualizar perfil');
        }

        const profileResult = await profileResponse.json();
        console.log('✅ Profile updated:', profileResult);
        
        // Actualizar usuario en localStorage
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user.about_me = about_me;
        localStorage.setItem('user', JSON.stringify(user));

        alert('✅ Perfil actualizado correctamente');

      } catch (error) {
        console.error('❌ Error al guardar:', error);
        alert('❌ Error al guardar cambios: ' + error.message);
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Guardar Cambios';
      }
    });

    // Evento logout
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
          console.log('👋 Cerrando sesión...');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '../../index.html';
        }
      });
    }
  });

  // Función para probar conexión con el servidor
  async function testServerConnection() {
    try {
      console.log('🔌 Probando conexión con el servidor...');
      const response = await fetch(`${API_URL}/api/health`, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Servidor conectado:', data);
      } else {
        console.warn('⚠️ Servidor respondió con error:', response.status);
      }
    } catch (error) {
      console.error('❌ No se pudo conectar al servidor:', error);
      console.error('💡 Verifica que el servidor esté corriendo en:', API_URL);
    }
  }

  // Función para cargar el perfil del usuario
  async function loadUserProfile() {
    const token = localStorage.getItem('token');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const aboutInput = document.getElementById('about');
    const avatarPreview = document.getElementById('avatarPreview');

    if (!token) {
      console.error('❌ No hay token');
      return;
    }

    console.log('👤 Cargando perfil...');
    console.log('🔑 Token:', token.substring(0, 20) + '...');

    try {
      const url = `${API_URL}/api/auth/profile`;
      console.log('📡 Fetching:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
        
        if (response.status === 401 || response.status === 403) {
          alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '../login-register.html';
          return;
        }
        
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.detail || `Error ${response.status}`);
        } catch (e) {
          throw new Error(`Error ${response.status}: ${errorText}`);
        }
      }

      const data = await response.json();
      console.log('✅ Perfil cargado:', data);
      const user = data.user;

      // Llenar los campos
      if (usernameInput) usernameInput.value = user.username || '';
      if (emailInput) emailInput.value = user.email || '';
      if (aboutInput) aboutInput.value = user.about_me || '';

      // Deshabilitar campos que no se pueden editar
      if (usernameInput) usernameInput.disabled = true;
      if (emailInput) emailInput.disabled = true;
      
      // Ocultar campo de contraseña (no se usa)
      const passwordField = document.getElementById('password');
      if (passwordField) {
        const fieldContainer = passwordField.closest('.field');
        if (fieldContainer) fieldContainer.style.display = 'none';
      }

      // Cargar imagen de perfil
      if (avatarPreview) {
        if (user.profile_image) {
          avatarPreview.src = user.profile_image;
          console.log('🖼️ Imagen de perfil cargada:', user.profile_image);
        } else {
          avatarPreview.src = `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.username}&backgroundColor=b6a6f2,ffc6d9&shapeColor=ffffff`;
          console.log('🖼️ Usando avatar por defecto');
        }
      }

      // Guardar en localStorage
      localStorage.setItem('user', JSON.stringify(user));

    } catch (error) {
      console.error('❌ Error al cargar perfil:', error);
      console.error('Stack trace:', error.stack);
      alert('Error de conexión: ' + error.message + '\n\nRevisa la consola (F12) para más detalles.');
    }
  }

  // Funciones de animación
  function pulse(el) {
    el.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.97)' },
        { transform: 'scale(1)' }
      ],
      { duration: 220, easing: 'cubic-bezier(.22,.61,.36,1)' }
    );
  }

  function ring(el) {
    const host = el.closest('.avatar-stack') || el.parentElement || el;
    const r = host.getBoundingClientRect();
    const circle = document.createElement('span');
    circle.style.position = 'absolute';
    circle.style.left = '50%';
    circle.style.top = '50%';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    circle.style.width = Math.max(r.width, r.height) + 'px';
    circle.style.height = Math.max(r.width, r.height) + 'px';
    circle.style.border = '3px solid #B388FF';
    circle.style.borderRadius = '9999px';
    circle.style.pointerEvents = 'none';
    circle.style.opacity = '0.9';
    circle.style.boxSizing = 'border-box';
    host.style.position = host.style.position || 'relative';
    host.appendChild(circle);

    const a = circle.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0.9 },
        { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 0 }
      ],
      { duration: 520, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'forwards' }
    );
    a.onfinish = () => circle.remove();
  }

  function ripple(el, clientX, clientY) {
    const rect = el.getBoundingClientRect();
    const maxDim = Math.max(rect.width, rect.height);
    const ring = document.createElement('span');
    ring.style.position = 'absolute';
    ring.style.left = clientX - rect.left + 'px';
    ring.style.top = clientY - rect.top + 'px';
    ring.style.width = '8px';
    ring.style.height = '8px';
    ring.style.transform = 'translate(-50%, -50%) scale(0)';
    ring.style.border = '3px solid #8E6CE6';
    ring.style.borderRadius = '9999px';
    ring.style.pointerEvents = 'none';
    ring.style.opacity = '0.85';
    ring.style.boxSizing = 'border-box';
    el.style.position = el.style.position || 'relative';
    el.appendChild(ring);

    const anim = ring.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0.85 },
        { transform: `translate(-50%, -50%) scale(${(maxDim / 6).toFixed(2)})`, opacity: 0 }
      ],
      { duration: 500, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'forwards' }
    );
    anim.onfinish = () => ring.remove();
  }
})()