const { Router } = require("express");
const { getSearch } = require("../controllers/search.controller");

const cache = require("../middlewares/cache")

const router = Router();

router.get('/', cache(10), getSearch)

module.exports = router