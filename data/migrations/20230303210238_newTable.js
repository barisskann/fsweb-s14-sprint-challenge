/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("project", (p) => {
      p.increments("project_id");
      p.string("project_name ").notNullable();
      p.string("project_description ");
      p.string("project_completed ").defaultTo(false);
    })
    .createTable("resource", (r) => {
      r.increments("resource_id ");
      r.string("resource_name ").notNullable().unique();
      r.string("resource_description ");
    })
    .createTable("task", (t) => {
      t.increments("task_id ");
      t.string("task_description ").notNullable();
      t.string("task_notes ");
      t.string("task_completed ").defaultTo(false);
      t.integer("project_id ")
        .notNullable()
        .references("project_id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project");
};
