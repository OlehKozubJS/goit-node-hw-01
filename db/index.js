const fs = require("fs/promises");
const path = require("path");

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

const addContact = async (name, email, phone) => {};

module.exports = { listContacts, getContactById, addContact };
