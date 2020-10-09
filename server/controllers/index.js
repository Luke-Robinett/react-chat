const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/api/login", (req, res, next) => {
 const { username } = req.body;

 User.findOne({ username: username })
  .then(foundUser => {
   if (foundUser)
    return res.status(500)
     .send("User already exists.");

   // Add user to db
   const newUser = new User();
   newUser.username = username;
   newUser.save()
    .then(data => res.json(data))
    .catch(next);
  })
  .catch(next);
});

module.exports = router;
