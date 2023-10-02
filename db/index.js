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

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  await contacts.push(newContact);
  await writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = { listContacts, getContactById, addContact };
