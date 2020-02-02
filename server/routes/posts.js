import express from 'express';
const router = express.Router();

const pool = require('../db/index');

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

  // execute the query and get the result
  db.query(queryString, [user_id, title, content], (err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    // send the result back as the response
    res.json(result);
  });
});

export default router;