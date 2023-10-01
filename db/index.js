const fs = require("fs/promises");
const path = require("path");

const { readFile, writeFile } = fs;

const contactsPath = path.resolve("db", "contacts.js");

const listContacts = async () => {
  const data = await readFile(contactsPath);
  return JSON.parse(data);
};

module.exports = { listContacts };
