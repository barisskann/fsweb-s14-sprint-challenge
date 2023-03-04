// bu`Task` modeli buraya

const db = require("../../data/dbConfig");

function getTasks(id) {
  return db("task as t")
    .leftJoin("project as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .where("t.project_id", id);
}
function postTask(data) {
  return db("task")
    .insert(data)
    .then((r) => {
      return getTasks(data.project_id).where("task_id", r).first();
    });
}
module.exports = { getTasks, postTask };
