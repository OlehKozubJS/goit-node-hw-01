const fs = require("fs/promises");
const path = require("path");

const { readFile, writeFile } = fs;

const contactsPath = path.resolve("db", "contacts.json");

async function listContacts() {
  const data = await readFile(contactsPath);
  return JSON.parse(data);
}
/*
function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
*/
