import express from 'express';
import PostModel from '../models/post';

const router = express.Router();

/** FETCH all posts */
router.get('/', async (_, res, next) => {
  try {
    const posts = await PostModel.getAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* CREATES a new post */
router.post('/', async (req, res, next) => {
  // get the user data from the request body
  const { user_id, title, content } = req.body;

  if (!user_id || !title || !content) res.status(401).send("There's properties missing in payload");

  try {
    await PostModel.create(req.body);
    res.status(201).json("Post successfully created!");
  } catch (error) {
    res.status(500).json(error);
  }
});

/* UPDATES a post */
router.put('/', async (req, res, next) => {
  // get the user data from the request body
  const { post_id } = req.body;

  if (!post_id) res.status(401).send("Need a valid post id");

  try {
    await PostModel.update(req.body);
    res.status(200).json("Post successfully updated!");
  } catch (error) {
    res.status(500).json(error);
  }
});

/* DELETE a posts */
router.delete('/', async (req, res, next) => {
  
  const { post_id } = req.body;
  if (!post_id) res.status(401).send("Need a valid post id");

  try {
    await PostModel.del(post_id);
    res.status(200).json("Post has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});



export default router;