const router = require("express").Router();
const CartService = require("../services/cartServices");
const service = new CartService();

router.post("/", async (req, res, next) => {
  try {
    const rsp = await service.createCart();
    res.status(200).json(rsp);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const resp = service.deleteById(id);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/productos", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = await service.getProductsCart(id);
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/productos", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newProduct = req.body;
    const product = await service.addProductCart(id, newProduct);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:idCart/productos/:id_prod", async (req, res, next) => {
  try {
    const { idCart, id_prod } = req.params;
    const rsp = await service.deleteProductCart(idCart, id_prod);
    res.status(200).json(rsp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
