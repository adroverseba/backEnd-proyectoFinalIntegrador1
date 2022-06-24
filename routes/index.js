const routerProductos = require("./productRouter");
const routerCarrito = require("./cartRouter");

function routerApi(app) {
  app.use("/api/productos", routerProductos);
  app.use("/api/carrito", routerCarrito);
}

module.exports = routerApi;
