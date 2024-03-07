const express = require("express");
const OrderController = require("../controller/orderController");
const { validateCreate, validateUpdate } = require('../validator/orderValidator');
router = express.Router();

router.post("/create", validateCreate, OrderController.create);
router.get('/getById/:id', OrderController.getById);
router.get("/", OrderController.getAll);

router.put("/update/:id",OrderController.update);
router.post("/delete/:id", OrderController.delete);


module.exports = router;
