const {BarList} = require('../models');
const sequelize = require('../config/connection')

const isUnique = (bar) => {

  console.log("bar.id", bar.id);  

    return BarList.count({ where: { id: bar.id } })
    .then(count => {
      console.log("barlist count", count)
      if (count != 0) {
        return false;
      }
      return true;
    })
    .catch(err => {return err});
}

module.exports = isUnique;