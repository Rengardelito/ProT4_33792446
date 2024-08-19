const express = require("express");
const libro = require("./controller");

const router = express.Router();

router.get("/libros", libro.getAll);
router.get("/libros/:id", libro.getOne);
router.post("/libros", libro.add);
router.delete("/libros", libro.delete);
router.put("/libros/:id", libro.update);

module.exports = router;
