# Primer Desafio Integrador de Back End

Aplicación eCommerce Backend, que implementa un servidor de aplicación basado en la plataforma **Node.js** y el módulo **express**. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base _'/productos'_ y el otro con _'/carrito'_. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

1. Aspectos del entregable:
   El router base _'/api/productos'_ implementará cuatro funcionalidades:
   `GET: '/:id?'` - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
   `POST: '/' ` - Para incorporar productos al listado (disponible para administradores)
   `PUT: '/:id'` - Actualiza un producto por su id (disponible para administradores)
   `DELETE: '/:id'` - Borra un producto por su id (disponible para administradores)

2. El router base _'/api/carrito'_ implementará tres rutas disponibles para usuarios y administradores:
   `POST: '/'` - Crea un carrito y devuelve su id.
   `DELETE: '/:id'` - Vacía un carrito y lo elimina.
   `GET: '/:id/productos'` - Me permite listar todos los productos guardados en el carrito
   ` POST: '/:id/productos'` - Para incorporar productos al carrito por su id de producto
   ` DELETE: '/:id/productos/:id_prod'` - Eliminar un producto del carrito por su id de carrito y de producto

3. Crear una variable booleana administrador, cuyo valor configuraremos más adelante con el sistema de login. Según su valor (true ó false) me permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: { error : -1, descripcion: ruta 'x' método 'y' no autorizada }
