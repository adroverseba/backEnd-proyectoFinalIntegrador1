const router = require("express").Router();
const Cart = require("../services/cartServices");
const cartContainer = new Cart("cart");

router.post("/", (req, res, next) => {
  try {
    const rsp = cartContainer.createCart();
    res.status(200).json(rsp);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const resp = cartContainer.deleteById(id);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/productos", (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = cartContainer.getProductsCart(id);
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/productos", (req, res) => {
  try {
    const { id } = req.params;
    const newProduct = req.body;
    const product = cartContainer.addProductCart(id, newProduct);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/productos/:id_prod", (req, res, next) => {
  try {
    const { id, id_prod } = req.params;
    const rsp = cartContainer.deleteProductCart(id, id_prod);
    res.status(200).json(rsp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
