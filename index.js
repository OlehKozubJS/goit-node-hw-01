// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contacts.listContacts();
      return console.log(contactList);
      break;

    case "get":
      const contact = contacts.getContactById(id);
      return console.log(contact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
