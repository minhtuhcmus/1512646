const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const mongoose = require('mongoose');
require('./models/user.model');
const User = mongoose.model('User');
var bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, 
    async (email, password, cb) => {
    try{
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        const user = await User.findOne({ email });
        if (!user) {
            return cb(null, false, {message: 'Incorrect email or password.'});
        }else{
            if(bcrypt.compareSync(password, user.hash_password)){
                return cb(null, user, {message: 'Logged in successfully'})
            }
            return cb(null, false, {message: 'Password is not correct'});
        }
        
    }catch(err){err => cb(err)}}
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : 'my_jwt_secret'
}, function (jwtPayload, cb) {
  //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
  return User.findOne({ email: jwtPayload.email })
    .then(user => {
      return cb(null, user);
    })
    .catch(err => {
      return cb(err);
    });
  }
));