const seedUser = require("./user-seed");
const seedComment = require("./comment-seed");
const seedBarList = require("./barlist-seed");
const sequelize = require("../config/connection");

const seedDb = async () => {
  await sequelize.sync({
    force: true
  });
  await seedUser();
  await seedComment();
  await seedBarList();
  process.exit(0);
};

seedDb();
