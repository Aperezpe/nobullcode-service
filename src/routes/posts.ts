import express from 'express';
const router = express.Router();

/* GET all posts */
router.get('/', (req, res, next) => {
  res.send("hello");
});

/* CREATES a new post */
router.post('/', (req, res, next) => {
  // get the user data from the request body
  const { user_id, title, content } = req.body;

  // build the query string using parameterized values
  const queryString = 'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *';
});

export default router;