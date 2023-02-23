const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;
    const tags = await knex("tags")
      .where({ user_id })
      .groupBy("name")
      .select("name")
      .count("name as count");

    return response.json(tags);
  }
  
}

module.exports = TagsController;