const mongoose = require("mongoose");

const meetSchema = new mongoose.Schema(
  {
    uid1: {
      type: String,
      // required: true,
      unique: false,
    },
    uid2: {
      type: String,
      // required: true,
      unique: false,
    },
    date: {
      type: Date,
    },
    meetid: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("meet", meetSchema);
