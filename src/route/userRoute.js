const express = require("express");
const UserController = require("../controller/userController");
const { validateCreate, validateUpdate } = require('../validator/userValidator');

router = express.Router();

router.post("/create", validateCreate,UserController.create);
router.get("/", UserController.getAll);
router.get('/getById/:id', UserController.getById);

router.put("/update/:id",UserController.update);
router.post("/delete/:id", UserController.delete);



module.exports = router;
