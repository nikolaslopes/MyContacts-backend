// uuid -> 'Universal Unique ID'
const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Nikolas',
    email: 'nikolas@mail.com',
    phone: '40028992',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Thif',
    email: 'thif@mail.com',
    phone: '112233444',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    // List all registers
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    // Get One register by id
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);

    return row;
  }

  async findByEmail(email) {
    // Get One register by email
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);

    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    // Create One register
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  delete(id) {
    // Delete One register
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

// Singleton
module.exports = new ContactsRepository();
