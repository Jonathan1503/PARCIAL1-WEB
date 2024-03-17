# PARCIAL1-WEB
Jonathan Rivera
202022864

-----------------------
# Pasos para la ejecución del proyecto
--------------------------
1. Clonar el proyecto con git clone https://github.com/Jonathan1503/PARCIAL1-WEB.git
2. Desde una terminal abrir la carpeta del proyecto, y correr el comando npm install
3. Finalmente correr el comando npm start, se abrira la aplicación en su navvegador predeterminado

----------------------------------
# Componentes  y elementos utilizados
----------------------------------

### App

Configura las rutas y la internacionalización.

### Home

Muestra información del usuario y galería de imágenes.

Elementos utilizados:
- `Image`: De React-Bootstrap, para mostrar la imagen de perfil del usuario.

### Perfil

Permite a los usuarios editar su perfil.

Elementos utilizados:
- `useState`: Para el manejo de estados del formulario.
- `useEffect`: Para la carga inicial de datos del usuario.
- `axios`: Para realizar solicitudes HTTP a la API del perfil.
- `FormattedMessage`: De react-intl, para la internacionalización de etiquetas de formulario.

### ImageModal

Un modal para mostrar imágenes ampliadas.

Elementos utilizados:
- `Modal`: De React-Bootstrap, para crear el modal.
- `useState` y `useEffect`: Para el manejo del estado del modal.
- `useEffect`: Para agregar y remover clases para el efecto de desenfoque del fondo.

### UserProfileField

Un componente reutilizable para los campos de formulario del perfil.

Elementos utilizados:
- `FormattedMessage`: De react-intl, para la internacionalización de etiquetas de formulario.
