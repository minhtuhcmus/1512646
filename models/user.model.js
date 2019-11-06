const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type:String, require: true },
  hash_password: { type: String, require: true },
  status: { type: String, require: true },
  avatar: { type: String, require: true }
});

module.exports = mongoose.model('User', UserSchema);