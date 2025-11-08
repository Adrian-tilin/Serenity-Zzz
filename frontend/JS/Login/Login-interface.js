// URL del backend - CAMBIA ESTO según tu entorno
const API_URL = 'http://127.0.0.1:8000'; // Para desarrollo local
// const API_URL = 'https://serenity-backend-78rn.onrender.com'; // Para producción

$('#signup').click(function() {
  $('.pinkbox').css('transform', 'translateX(80%)');
  $('.signin').addClass('nodisplay');
  $('.signup').removeClass('nodisplay');
});

$('#signin').click(function() {
  $('.pinkbox').css('transform', 'translateX(0%)');
  $('.signup').addClass('nodisplay');
  $('.signin').removeClass('nodisplay');
});

// Handle registration
$('#registerForm').on('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  };

  // Validar que las contraseñas coincidan
  if (data.password !== data.confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Validar longitud mínima de contraseña
  if (data.password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      })
    });

    const result = await response.json();

    if (response.ok) {
      // Guardar token y usuario en localStorage
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      alert('✅ Registro exitoso! Bienvenido ' + result.user.username);
      window.location.href = 'Select.html';
    } else {
      // Mostrar error específico del servidor
      alert(result.detail || 'Error en el registro');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error de conexión. Asegúrate de que el servidor esté corriendo.');
  }
});

// Handle login
$('#loginForm').on('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    username: formData.get('username'),
    password: formData.get('password')
  };

  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    });

    const result = await response.json();

    if (response.ok) {
      // Guardar token y usuario en localStorage
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
      alert('✅ Inicio de sesión exitoso! Bienvenido ' + result.user.username);
      window.location.href = 'Select.html';
    } else {
      // Mostrar error específico del servidor
      alert(result.detail || 'Error en el inicio de sesión');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error de conexión. Asegúrate de que el servidor esté corriendo.');
  }
});
