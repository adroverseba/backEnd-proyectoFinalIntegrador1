const router = require("express").Router();
const Container = require("../services/productServices");
const contenedor = new Container({ fileName: "products" });

router.get("/", (req, res) => {
  contenedor.getAll().then((prod) => res.json(prod));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  contenedor.getById(id).then((prod) => {
    res.send(prod);
  });
});

router.post("/", (req, res) => {
  const newProduct = req.body;
  contenedor.save(newProduct).then((prod) => res.send({ message: prod }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const product = req.body;
  contenedor.update();
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const product = req.body;
  contenedor
    .modifyById(id, product)
    .then((prod) => res.send(prod))
    .catch();
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  contenedor.deleteById(id).then((prod) => {
    res.send(prod);
  });
});
module.exports = router;
