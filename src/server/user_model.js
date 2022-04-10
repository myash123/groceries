const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  savedItems: {
    type: [String],
  }
})

const User = mongoose.model("User", UserSchema)
module.exports = User