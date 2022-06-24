const router = require("express").Router();
const Cart = require("../services/cartServices");
const cartContainer = new Cart("cart");

router.post("/", (req, res) => {
  const rsp = cartContainer.createCart();
  res.status(200).json(rsp);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const resp = cartContainer.deleteById(id);
  res.json(resp);
});

router.get("/:id/productos", (req, res) => {
  const { id } = req.params;
  const productos = cartContainer.getProductsCart(id);
  res.json(productos);
});

router.post("/:id/productos", (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  const product = cartContainer.addProductCart(id, newProduct);
  res.status(200).json(product);
});

//falta el delete

module.exports = router;
