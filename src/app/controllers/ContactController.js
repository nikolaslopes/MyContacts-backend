const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(request, response) {
    // List all registers
    const contacts = ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Get one register
  }

  store() {
    // Create a new register
  }

  update() {
    // Update one register
  }

  delete() {
    // Delete one register
  }
}

// Singleton -> one object instance in application
module.exports = new ContactController();
