class ContactController {
  index(request, response) {
    // List all registers
    response.send('Send from Contact Controller');
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
