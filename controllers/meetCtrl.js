const Meets = require("../models/meetModel");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const meetCtrl = {
  arrangeMeet: async (req, res) => {
    try {
      const { uid1, uid2, date } = req.body;

      const user_1 = await Users.findOne({ uid: uid1 });

      const user_2 = await Users.findOne({ uid: uid2 });

      if (user_1 && user_2) {
        const newMeet = new Meets({
          uid1: user_1.uid,
          uid2: user_2.uid,
          date: date,
        });

        try {
          await newMeet.save();
        } catch (err) {
          console.log(err);
        }

        console.log(newMeet);
        const newMeet1 = await Meets.findOneAndUpdate(
          { _id: newMeet._id },
          {
            meetid: newMeet._id,
          },
          { new: true }
        );

        res.json({
          msg: "Meet Araanged Success!",

          meet: newMeet1.meetid,
        });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllMeets: async (req, res) => {
    try {
      const result = await Meets.find({});
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  },
};

module.exports = meetCtrl;
