import knex from "../db/_connection";

// export type Post = {
//   user_id: string,
//   title: string,
//   content: string
// }


const create = async ({user_id, title, content}: any) => {
  return knex('posts').insert({
    user_id: user_id,
    title: title,
    content: content,
  });
}

const getAll = async () => {
  return knex('posts');
}

const update = async ({post_id, title, content}: any) => {
  return knex('posts').where('post_id', post_id).update({
    title: title,
    content: content,
    updated_at: new Date(Date.now()).toISOString(),
  })
}

const del = async (post_id: number) => {
  return knex('posts').where('post_id', post_id).del();
}

export default { create, getAll, update, del }