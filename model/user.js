const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    // hashed_password: {
    //   Type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
