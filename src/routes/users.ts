import express from 'express';
import PostModel from '../models/user';

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

export default router;