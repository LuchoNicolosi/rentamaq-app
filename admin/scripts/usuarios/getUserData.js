import userSession from './auth/session.js';

export async function cargarDatosUsuario() {
  const token = localStorage.getItem('token');
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const userId = decodedToken.userId;
  const url = `http://18.206.95.2/user/${userId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error al obtener la información del usuario');
  }
  const user = await response.json();

  return user;
}


