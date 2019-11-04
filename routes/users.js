var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var bcrypt = require('bcrypt');
require('../models/user.model');
const User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async (req, res, next) => {
  if(!req.body){
    return res.status(400).json({ message: 'Data unusable'}); 
  }
  const user = await User.findOne({username: req.body.username});
  if(user){
    return res.status(400).json({ message: 'Username already exists' });
  }else{
    
    const newUser = await new User({
      username: req.body.username,
      hash_password: req.body.password
    });


    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.hash_password, salt, (err, hash) => {
        if(err)
        {
          throw err;
        }
        newUser.hash_password = hash;
        newUser
        .save()
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err));
      });
    });
  } 
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err || !user) {
        return res.status(400).json({
            message: info ? info.message : 'Login failed',
            user   : user
        });
    }
    req.logIn(user, {session: false}, (err) => {
        if (err) {
            res.send(err);
        }
        const payload = {
          username: user.username,
          password: user.password
        };
        const token = jwt.sign(payload, 'my_jwt_secret');
        return res.status(200).json({ user:{ id: user.id, status: user.status }, token });
    });
})
(req, res);
});


module.exports = router;
