const fs = require("fs/promises");
const path = require("path");

const contactPath = require("./db/contacts.json");

const { readFile, writeFile } = fs;
// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
