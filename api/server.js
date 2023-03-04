// serverı buraya yazın ve index.js require yazın

const express = require("express");
const projectRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const taskRouter = require("./task/router");
const app = express();

app.use(express.json());

app.use("/api/projects", projectRouter);
app.use("/api/resource", resourcesRouter);
app.use("/api/tasks", taskRouter);

module.exports = app;
