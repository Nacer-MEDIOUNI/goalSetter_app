const express = require("express");
const router = express.Router();
const {
  readContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(readContacts).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact);

module.exports = router;
