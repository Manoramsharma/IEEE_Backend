const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // required: true,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    uid: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
