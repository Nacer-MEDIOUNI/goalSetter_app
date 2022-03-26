const asyncHandler = require("express-async-handler");
// Get All Contacts
// routes : GET /api/Contacts
// access Private
const readContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get our contacts" });
});

// set All Contacts
// routes : POST /api/Contacts
// access Private
const createContact = asyncHandler(async (req, res) => {
  if (!req.params.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ msg: "Set our contact" });
});

// Update  contact
// routes : PUT /api/Contacts/:id
// access Private
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update our contact ${req.params.id} ` });
});

// Delete  Contact
// routes : DELETE /api/Contacts/:id
// access Private
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete our contact ${req.params.id} ` });
});

module.exports = { readContacts, createContact, updateContact, deleteContact };
