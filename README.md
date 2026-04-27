# taller-final-js
# Taller Final - Consumo de API con JavaScript

Este proyecto es un taller práctico donde se aplica HTML, CSS y JavaScript para consumir una API pública y mostrar los datos dinámicamente en pantalla.

## Tecnologías usadas
- HTML
- CSS
- JavaScript
- Fetch API
- Async / Await

## Funcionalidades
- Consumo de una API pública
- Manejo de estados: cargando, éxito y error
- Renderizado dinámico con el DOM
- Buscador por nombre
- Diseño responsive con CSS Grid

## Cómo ejecutar el proyecto
1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/taller-final-js.git

 // ¿como funciona la página web?

// (Explicado para cualquier persona que la visite)

1️⃣ ¿Qué ve la persona al entrar a la página?

// Cuando una persona entra a la página web, lo primero que ve es:

🔹 Una cabecera (Header)

// En la parte superior aparece:

// El título del proyecto
// Una breve descripción que explica que la página consume datos desde una API pública usando JavaScript

👉 Esto le da contexto al usuario sobre qué hace la página.

2️⃣ Zona principal de interacción (Main)

// Debajo del encabezado, el usuario encuentra la parte más importante de la página.

🔹 Campo de búsqueda

// El visitante ve un campo de texto donde puede escribir un nombre.

👉 Este buscador sirve para filtrar los resultados por nombre una vez que los datos han sido cargados.

🔹 Botón “Cargar usuarios”

// El usuario ve un botón con el texto “Cargar usuarios”.

👉 Nada se carga automáticamente para que el usuario tenga el control.

// Cuando el usuario hace clic en el botón:

// La página comienza a pedir información a una API pública
// Aparece un mensaje de “Cargando…”
// El usuario espera unos segundos mientras llegan los datos
3️⃣ ¿Qué pasa internamente cuando se presiona el botón?

// (Esto es lo que ocurre “por detrás”, sin que el usuario lo vea)

// El botón está conectado a una función de JavaScript
// Esa función hace una petición a una API pública en internet
// La petición es asíncrona, lo que significa que:
// La página no se bloquea
// El usuario puede seguir viendo la interfaz

// Mientras se espera la respuesta:

// Se muestra el mensaje “Cargando…”
4️⃣ ¿Qué es la información que llega?

// La API responde con una lista de usuarios en formato JSON.

// Cada usuario tiene información como:

// Nombre
// Correo electrónico
// Ciudad
// Empresa

👉 La página usa esos datos para construir la vista.

5️⃣ Cómo se muestran los datos en pantalla

// Cuando los datos llegan correctamente:

🔹 Estado de éxito

// El mensaje cambia a:

// “Usuarios cargados correctamente”

🔹 Tarjetas de información

// En el centro de la página aparecen tarjetas organizadas en filas:

// Cada tarjeta muestra:

// El nombre del usuario
// Su correo
// La ciudad donde vive
// La empresa en la que trabaja

👉 Las tarjetas se acomodan automáticamente según el tamaño de la pantalla:

// En computador se ven varias columnas
// En celular se acomodan una debajo de otra
6️⃣ Uso del buscador

// Una vez que los usuarios están cargados:

// El visitante puede escribir un nombre en el buscador
// A medida que escribe:
// La página filtra los resultados
// Solo se muestran los usuarios que coinciden

👉 No se vuelve a consultar la API
👉 El filtrado se hace en tiempo real
