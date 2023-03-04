// `Proje` modeli buraya
const db = require("../../data/dbConfig");
function getProjects(params) {
  return db("project");
}
function findIdProject(id) {
  return db("project").where("project_id", id).first();
}
function addProjects(projects) {
  return db("project")
    .insert(projects)
    .then((r) => findIdProject(r[0]));
}

module.exports = { addProjects, findIdProject, getProjects };
