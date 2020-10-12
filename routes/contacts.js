const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route get api/contacts
// @desc get all users contacts
// @ access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch {
    console.error(err.message);
    res.status(500).send("server fucked");
  }
});

// @route post api/contacts
// @desc add new contact
// @ access Private
router.post("/", (req, res) => {
  res.send("add new contact");
});

// @route put api/contacts/:id
// @desc update
// @ access Private
router.put("/:id", (req, res) => {
  res.send("update contacts");
});

// @route delete api/contacts/:id
// @desc delete contact
// @ access Private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
