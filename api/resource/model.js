// `Resource` modeli buraya
const db = require("../../data/dbConfig");

function getResources(params) {
  return db("resource");
}
function findIdResource(id) {
  return db("resource").where("resource_id ", id).first();
}

function addResources(resource) {
  return db("resource")
    .insert(resource)
    .then((r) => findIdResource(r[0]));
}
module.exports = { addResources, findIdResource, getResources };
