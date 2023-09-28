import yargs from "yargs";

import * as contactService from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contactService.listContacts();
      console.table(contactList);
      break;

    case "get":
      const oneContact = await contactService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const { argv } = yargs(process.argv);

invokeAction(argv);
