const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const { listContacts, getContactById } = require("./db");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      return console.log(contactList);

    case "get":
      const contact = getContactById(id);
      return console.log(contact);
    /*
    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;
*/
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(/*argv*/ { action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
