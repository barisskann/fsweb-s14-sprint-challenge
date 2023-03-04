// `/api/resources` router buraya
const router = require("express").Router();
const Resource = require("./model");

router.post("/", async (req, res, next) => {
  const data = await Resource.addResources(req.body);
  return res.json(data);
});
router.get("/", async (req, res, next) => {
  const data = await Resource.getResources();
  return res.json(data);
});

module.exports = router;
