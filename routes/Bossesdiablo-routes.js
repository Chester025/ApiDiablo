var express = require("express");
var router = express.Router();

const bossesdiabloController = require("../Controller/Bossesdiablo-controller.js");

router.get('/',  bossesdiabloController.listBosses)
module.exports = router;