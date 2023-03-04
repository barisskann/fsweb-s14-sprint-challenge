// `/api/tasks` router buraya
const router = require("express").Router();
const Task = require("./model");
router.get("/", async (req, res, next) => {
  const { project_id } = req.body;
  const data = await Task.getTasks(project_id);
  return res.json(data);
});
router.post("/", async (req, res, next) => {
  const data = await Task.postTask(req.body);
  return res.json(data);
});

module.exports = router;
