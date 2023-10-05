const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const { readFile, writeFile } = fs;

const contactsPath = path.resolve("db", "contacts.json");

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
  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContactById = async (id, { name, email, phone }) => {
  let contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
};
