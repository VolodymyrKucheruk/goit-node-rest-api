import { Contact } from "../models/contactModel.js";

export async function listContacts() {
  const data = await Contact.find();
  return data;
}

export async function getContactById(id) {
  const foundContact = Contact.findById(id);
  return foundContact || null;
}

export async function removeContact(id) {
  const removedContact = await Contact.findByIdAndDelete(id);
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
export async function updateStatusContact(id, body) {
  const { favorite } = body;
  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  return updatedContact;
}
