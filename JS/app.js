const boton = document.getElementById('btnCargar');
const resultados = document.getElementById('resultados');
const estado = document.getElementById('estado');
const buscador = document.getElementById('buscador');

let usuarios = [];

// EVENTO DEL BOTÓN
boton.addEventListener('click', cargarDatos);

// FUNCIÓN ASÍNCRONA
async function cargarDatos() {
  estado.textContent = 'Cargando...';
  resultados.innerHTML = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    usuarios = data;
    estado.textContent = 'Usuarios cargados correctamente';
    mostrarUsuarios(usuarios);

  } catch (error) {
    estado.textContent = 'Error al cargar los datos';
    console.error(error);
  }
}

// MOSTRAR USUARIOS
function mostrarUsuarios(lista) {
  resultados.innerHTML = '';

  lista.slice(0, 6).forEach(user => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    tarjeta.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Ciudad: ${user.address.city}</p>
      <p>Empresa: ${user.company.name}</p>
    `;

    resultados.appendChild(tarjeta);
  });
}

// BUSCADOR POR NOMBRE (FUNCIONALIDAD ADICIONAL)
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(texto)
  );
  mostrarUsuarios(filtrados);
});