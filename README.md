# Desafio Integrador de Back End - Segunda Entrega

Aplicación eCommerce Backend, que implementa un servidor de aplicación basado en la plataforma **Node.js** y el módulo **express**. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base _'/productos'_ y el otro con _'/carrito'_. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com(subida proximamente)

## Aspectos del entregable:

1. El router base _'/api/productos'_ implementará cuatro funcionalidades:

   - `GET: '/:id?'` - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
   - `POST: '/' ` - Para incorporar productos al listado (disponible para administradores)
   - `PUT: '/:id'` - Actualiza un producto por su id (disponible para administradores)
   - `DELETE: '/:id'` - Borra un producto por su id (disponible para administradores)

2. El router base _'/api/carrito'_ implementará tres rutas disponibles para usuarios y administradores:

   - `POST: '/'` - Crea un carrito y devuelve su id.
   - `DELETE: '/:id'` - Vacía un carrito y lo elimina.
   - `GET: '/:id/productos'` - Me permite listar todos los productos guardados en el carrito
   - ` POST: '/:id/productos'` - Para incorporar productos al carrito por su id de producto
   - ` DELETE: '/:id/productos/:id_prod'` - Eliminar un producto del carrito por su id de carrito y de producto

3. Realizar integracion respectiva a _base de datos_:

   - conectar la ruta de _carrito_ a **MongoDB** por medio del servicio en la nube **Atlas**.
   - conectar la ruta de _productos_ a **Postgres SQL** haciendo uso del ORM **Sequelize**

## Como se usa

- descargar el repositorio
- conectar las respectivas base de datos con las credenciales que se dejan en este repositorio
- utilizar alguna plataforma de API para probar la aplicacion
