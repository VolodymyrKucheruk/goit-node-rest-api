import * as contactsServices from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res) => {
  try {
    const result = await contactsServices.listContacts();
    res.status(200).json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await contactsServices.getContactById(id);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).json(contact);
  } catch (error) {
    handleError(error, res);
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const removedContact = await contactsServices.removeContact(id);
    if (!removedContact) {
      throw HttpError(404);
    }
    res.status(200).json(removedContact);
  } catch (error) {
    handleError(error, res);
  }
};

export const createContact = async (req, res) => {
  try {
    const result = await contactsServices.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateContact = async (req, res) => {
  const { id } = req.params;

  try {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "Body must have at least one field");
    }
    const result = await contactsServices.updateContact(id, req.body);
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
  } catch (error) {
    handleError(error, res);
  }
};

export const updateContactFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  try {
    const updatedContact = await updateStatusContact(contactId, { favorite });
    if (!updatedContact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    handleError(error, res);
  }
};

const handleError = (error, res) => {
  const status = error.status || 500;
  const message = error.message || "Server error";
  res.status(status).json({ message });
};
