# Primer Desafio Integrador de Back End

avance de tu aplicación eCommerce Backend, que implemente un servidor de aplicación basado en la plataforma Node.js y el módulo express. El servidor implementará dos conjuntos de rutas agrupadas en routers, uno con la url base '/productos' y el otro con '/carrito'. El puerto de escucha será el 8080 para desarrollo y process.env.PORT para producción en glitch.com

> Aspectos a incluir en el entregable:
> El router base '/api/productos' implementará cuatro funcionalidades:
> GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
> POST: '/' - Para incorporar productos al listado (disponible para administradores)
> PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
> DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

2. El router base '/api/carrito' implementará tres rutas disponibles para usuarios y administradores:
   POST: '/' - Crea un carrito y devuelve su id.
   DELETE: '/:id' - Vacía un carrito y lo elimina.
   GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
   POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
   DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
