import { Contact } from "../models/contactModel.js";

export async function listContacts() {
  const data = await Contact.find();
  return data;
}

export async function getContactById(contactId) {
  const foundContact = Contact.findById(contactId);
  return foundContact || null;
}

export async function removeContact(contactId) {
  const removedContact = await Contact.findByIdAndDelete(contactId);
  return removedContact;
}

export async function addContact(contact) {
  const newContact = await Contact.create(contact);
  return newContact;
}

export async function updateContact(id, body) {
  const updatedContact = await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedContact;
}
export async function updateStatusContact(contactId, body) {
  const { favorite } = body;
  const updatedContact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
  return updatedContact;
}
