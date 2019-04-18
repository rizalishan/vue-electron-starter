import Sequelize from 'sequelize';

export default (sequelize) => {
  const Licence = sequelize.define('Licence', {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    licence_key: {
      type: Sequelize.STRING,
    },
  }, {});
  return Licence;
};
