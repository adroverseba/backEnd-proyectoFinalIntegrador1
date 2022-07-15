const router = require("express").Router();
const ProductService = require("../services/productServices");
const service = new ProductService();

router.get("/", (req, res) => {
  service.getAll().then((prod) => res.json(prod));
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  service.save(newProduct).then((prod) => res.send({ message: prod }));
});

//TODO: verificar actualizacion por metodo put
// router.put("/:id", async (req, res,next) => {
//   try {
//     const { id } = req.params;
//     const product = req.body;
//     const category = await service.update(id, product);
//     res.status(200).json(category);
//   } catch (error) {
//     next(error);
//   }
// });

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const category = await service.modifyById(id, product);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteById(id);
    res.status(200).json({ id });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
