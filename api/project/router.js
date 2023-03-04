//  `/api/projects` router buraya
const Project = require("./model");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const data = await Project.addProjects(req.body);
  return res.json(data);
});
router.get("/", async (req, res, next) => {
  const data = await Project.getProjects();
  return res.status(200).json(data);
});

module.exports = router;
