const pgClient = require("../config/pgClient");

const index = (req, res) => {
  pgClient
    .query("SELECT id, username FROM users ORDER BY username")
    .then((results) => {
      res.status(200).json(results.rows);
    })
    .catch((error) => {
      res.status(500).json({ error: `Error: ${error}.` });
    });
};

module.exports = { index };