const asyncHandler = require("express-async-handler");

const ContactModel = require("../models/contactModel");

// Get All Contacts
// routes : GET /api/Contacts
// access Private
const readContacts = asyncHandler(async (req, res) => {
  const contacts = await ContactModel.find();

  res.status(200).json(contacts);
});

// set All Contacts
// routes : POST /api/Contacts
// access Private
const createContact = asyncHandler(async (req, res) => {
  const contactExist = await ContactModel.findOne({ email: req.body.email });
  if (contactExist) {
    res.status(400);
    throw new Error("Contact already exists!");
  } else if (!req.body) {
    res.status(500);
    throw new Error({ msg: "Contact not added" });
  }
  const newContact = await ContactModel(req.body);
  await newContact.save();
  res.status(200).send({ msg: "Contact added successfully", newContact });
});

// Update  contact
// routes : PUT /api/Contacts/:id
// access Private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);

  if (!contact) {
    res.status(400);
    throw new Error("Contact not found");
  }
  const updatedContact = await ContactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    msg: `The contact with the following ID: ${req.params.id} is updated`,
    updatedContact,
  });
});

// Delete  Contact
// routes : DELETE /api/Contacts/:id
// access Private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);

  if (!contact) {
    res.status(400);
    throw new Error("Contact not found");
  }

  const deletedContact = await contact.remove({ id: req.params.id });
  res.status(200).json({
    msg: `The contact with the following ID: ${req.params.id} is deleted`,
    deletedContact,
  });
});

module.exports = { readContacts, createContact, updateContact, deleteContact };
