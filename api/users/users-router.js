const express = require("express");
const Posts = require("../posts/posts-model");
const Users = require("../users/users-model");
const {
  logger,
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/middleware");
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get("/", (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.find(req.query)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(404).json({ message: "there was an error" });
    });
});

router.get("/:id", (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
});

router.post("/", (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put("/:id", (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete("/:id", (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get("/:id/posts", (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post("/:id/posts", (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
