const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    // To list all categories
    const { orderBy } = request.query;

    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async store(request, response) {
    // To create one category
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoriesRepository.findAll(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'This category is already in use' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    // To update one category
    const { id } = request.params;

    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findAll(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    // To delete one category
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
