import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createSchema('test1')
    .createTable('users', table => {
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255);
      table.string('username', 255).notNullable().unique();
      table.string('password', 255).notNullable();
    })
    .createTable('posts', table => {
      table.increments('id');
      table.uuid('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.string('category', 255).notNullable();
      table.string('sub_category', 255);
      table.string('title', 255).notNullable().unique();
      table.text('content', 'longtext').notNullable();
      table.string('preview_text');
      table.string('img_url');
      table.integer('read_time');
      table.string('post_url');
      
      table.date('created_at').defaultTo(Date.now());
      table.date('updated_at').defaultTo(Date.now());
    })
    .createTable('likes', table => {
      table.increments('id');
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.foreign('post_id')
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropSchema('test1')
    .dropTable('users')
    .dropTable('posts')
    .dropTable('likes');
}

