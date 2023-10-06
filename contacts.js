const { readFile, writeFile } = require("fs/promises");
const { resolve } = require("path");
const { nanoid } = require("nanoid");

const contactsPath = resolve("db", "index.js");

const updateContact = (contacts) => {
  writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result || null;
};

const addContact = async ({ name, email, phone }) => {
  let contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  updateContact(contacts);
  return newContact;
};

const updateContactById = async (id, { name, email, phone }) => {
  let contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  updateContact(contacts);
  return contacts[index];
};

const deleteContactById = async (id) => {
  let contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  updateContact(contacts);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
};
