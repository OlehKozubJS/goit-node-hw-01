const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

//const argv = program.opts();
const yargs = require("yargs");
const { argv } = yargs(process.argv);
console.log(argv);

const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      return console.table(contactList);

    case "get":
      const contact = await getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "update":
      const updateContact = await updateContactById(id, { name, email, phone });
      return console.log(updateContact);

    case "remove":
      const deleteContact = await deleteContactById(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
/*
const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv(actionIndex + 1);
  console.log(action);
}
*/

/*

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

*/
