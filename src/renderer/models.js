import Sequelize from 'sequelize';

/* eslint-disable no-new */
const sequelize = new Sequelize(null, null, 'rizalishan', {
  dialect: 'sqlite',
  dialectModulePath: '@journeyapps/sqlcipher',
  storage: 'static/db.ota',
});

const moduleCount = 1;

sequelize.authenticate().then(() => {
  sequelize.query('SELECT name FROM sqlite_master WHERE type = "table" AND name NOT LIKE "sqlite_%";', { type: sequelize.QueryTypes.SELECT }).then((res) => {
    if (res.length < moduleCount) {
      const migrationFiles = require.context('@/modules', true, /\.migration\.js$/);
      migrationFiles.keys().forEach((key) => {
        sequelize.query(migrationFiles(key).default);
      });
    }
  });
}, (err) => {
  // eslint-disable-next-line no-console
  console.log('Unable to connect to the database:', err);
});

const db = {
  models: {},
  sequelize,
  Sequelize,
};

const moduleFiles = require.context('@/modules', true, /\.model\.js$/);
moduleFiles.keys().forEach((key) => {
  const name = key.replace(/(.*\/)/g, '').replace(/\.model\.js$/, '');
  db.models[name] = moduleFiles(key).default(sequelize);
});

export default db;
