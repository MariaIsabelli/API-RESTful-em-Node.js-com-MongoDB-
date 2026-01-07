const express = require("express");
const controller = require("../controllers/livro.controller");

const router = express.Router();

router.get("/livros", controller.listar);
router.post("/livros", controller.criar);
router.put("/livros/:id", controller.atualizar);
router.delete("/livros/:id", controller.remover);

module.exports = router;
